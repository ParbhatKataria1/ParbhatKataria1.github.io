const RESUME_URL = "Parbhat_Resume.pdf";
const RESUME_FILE_NAME = "Parbhat_Resume.pdf";

export default function handleResume(event) {
  event?.preventDefault();

  window.open(RESUME_URL, "_blank", "noopener,noreferrer");

  const downloadLink = document.createElement("a");
  downloadLink.href = RESUME_URL;
  downloadLink.download = RESUME_FILE_NAME;
  downloadLink.style.display = "none";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
