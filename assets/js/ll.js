tdDelete.onclick = function() {
    Swal.fire({
      title: 'Emin misiniz?',
      text: "Bu öğeyi silmek istediğinize emin misiniz?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, sil',
      cancelButtonText: 'İptal'
    }).then((result) => {
      if (result.isConfirmed) {
        // Silme işlemini gerçekleştirin
        this.parentElement.remove();
        Swal.fire(
          'Silindi!',
          'Öğe başarıyla silindi.',
          'success'
        )
      }
    })
  }
  