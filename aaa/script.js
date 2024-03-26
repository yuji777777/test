function changeShape() {
  const arrow = document.getElementById('arrow');
  const currentShape = arrow.style.borderRadius;

  if (currentShape === '50%') {
      arrow.style.borderRadius = '0';
  } else {
      arrow.style.borderRadius = '50%';
  }
}
