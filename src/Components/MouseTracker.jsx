import { Box } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const MotionBox = motion(Box);

const PARTICLE_COUNT = 22;
const IDLE_FADE_DELAY = 180;
const IDLE_FADE_DURATION = 480;

function MouseTracker() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [particles, setParticles] = useState([]);
  const [idle, setIdle] = useState(true);
  const nextParticleRef = useRef(0);
  const particleTimeoutsRef = useRef({});
  const idleTimeoutRef = useRef(null);

  const pointerX = useMotionValue(-120);
  const pointerY = useMotionValue(-120);

  const ringX = useSpring(pointerX, { stiffness: 180, damping: 18, mass: 0.45 });
  const ringY = useSpring(pointerY, { stiffness: 180, damping: 18, mass: 0.45 });
  const glowX = useSpring(pointerX, { stiffness: 90, damping: 20, mass: 0.8 });
  const glowY = useSpring(pointerY, { stiffness: 90, damping: 20, mass: 0.8 });

  const ringScale = useSpring(interactive ? 1.65 : 1, {
    stiffness: 240,
    damping: 20,
  });
  const coreScale = useSpring(interactive ? 0.72 : 1, {
    stiffness: 260,
    damping: 22,
  });

  const ringTranslateX = useTransform(ringX, (value) => value - 18);
  const ringTranslateY = useTransform(ringY, (value) => value - 18);
  const coreTranslateX = useTransform(pointerX, (value) => value - 6);
  const coreTranslateY = useTransform(pointerY, (value) => value - 6);
  const glowTranslateX = useTransform(glowX, (value) => value - 110);
  const glowTranslateY = useTransform(glowY, (value) => value - 110);

  const particleBase = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
        id: index,
        x: -200,
        y: -200,
        size: 0,
        dx: 0,
        dy: 0,
      })),
    []
  );

  useEffect(() => {
    setParticles(particleBase);
  }, [particleBase]);

  useEffect(() => {
    const canTrack =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer:fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setEnabled(canTrack);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const isInteractiveElement = (target) => {
      if (!(target instanceof Element)) {
        return false;
      }

      return Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]'
        )
      );
    };

    const handleMove = (event) => {
      const { clientX, clientY, movementX, movementY, target } = event;

      pointerX.set(clientX);
      pointerY.set(clientY);
      setVisible(true);
      setIdle(false);
      setInteractive(isInteractiveElement(target));

      if (idleTimeoutRef.current) {
        window.clearTimeout(idleTimeoutRef.current);
      }

      idleTimeoutRef.current = window.setTimeout(() => {
        setIdle(true);
      }, IDLE_FADE_DELAY);

      const speed = Math.min(Math.abs(movementX) + Math.abs(movementY), 24);
      if (speed < 2) {
        return;
      }

      const particleId = nextParticleRef.current;
      nextParticleRef.current = (nextParticleRef.current + 1) % PARTICLE_COUNT;

      setParticles((current) =>
        current.map((particle) =>
          particle.id === particleId
            ? {
                ...particle,
                x: clientX,
                y: clientY,
                size: 6 + Math.min(speed / 2.4, 10),
                dx: movementX * -1.1,
                dy: movementY * -1.1,
              }
            : particle
        )
      );

      if (particleTimeoutsRef.current[particleId]) {
        window.clearTimeout(particleTimeoutsRef.current[particleId]);
      }

      particleTimeoutsRef.current[particleId] = window.setTimeout(() => {
        setParticles((current) =>
          current.map((entry) =>
            entry.id === particleId ? { ...entry, size: 0 } : entry
          )
        );
      }, 360);
    };

    const handleLeave = (event) => {
      if (event?.relatedTarget) {
        return;
      }

      if (idleTimeoutRef.current) {
        window.clearTimeout(idleTimeoutRef.current);
      }

      setVisible(false);
      setIdle(true);
      setInteractive(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("blur", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("blur", handleLeave);
      if (idleTimeoutRef.current) {
        window.clearTimeout(idleTimeoutRef.current);
      }
    };
  }, [enabled, pointerX, pointerY]);

  useEffect(() => {
    if (!enabled) {
      if (idleTimeoutRef.current) {
        window.clearTimeout(idleTimeoutRef.current);
      }
      Object.values(particleTimeoutsRef.current).forEach((timeout) =>
        window.clearTimeout(timeout)
      );
      particleTimeoutsRef.current = {};
    }

    return () => {
      if (idleTimeoutRef.current) {
        window.clearTimeout(idleTimeoutRef.current);
      }
      Object.values(particleTimeoutsRef.current).forEach((timeout) =>
        window.clearTimeout(timeout)
      );
      particleTimeoutsRef.current = {};
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <Box
      aria-hidden="true"
      className="mouse-tracker"
      opacity={visible ? (idle ? 0 : 1) : 0}
      transition={`opacity ${idle ? IDLE_FADE_DURATION : 180}ms ease`}
    >
      <MotionBox
        className="mouse-tracker__glow"
        style={{ x: glowTranslateX, y: glowTranslateY }}
      />

      {particles.map((particle) => (
        <MotionBox
          key={particle.id}
          className="mouse-tracker__particle"
          initial={false}
          animate={{
            opacity: particle.size > 0 ? [0, 0.85, 0] : 0,
            x: particle.x + particle.dx - particle.size / 2,
            y: particle.y + particle.dy - particle.size / 2,
            scale: particle.size > 0 ? [0.35, 1.05, 1.5] : 0.2,
          }}
          transition={{ duration: 0.36, ease: "easeOut" }}
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}

      <MotionBox
        className="mouse-tracker__ring"
        style={{
          x: ringTranslateX,
          y: ringTranslateY,
          scale: ringScale,
        }}
      />

      <MotionBox
        className="mouse-tracker__core"
        style={{
          x: coreTranslateX,
          y: coreTranslateY,
          scale: coreScale,
        }}
      />
    </Box>
  );
}

export default MouseTracker;
