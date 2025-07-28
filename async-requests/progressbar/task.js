document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', function(evt) {
    if (evt.lengthComputable) {
      const percentComplete = evt.loaded / evt.total;
      document.getElementById('progress').value = percentComplete;
    }
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
  xhr.send(formData);
});
