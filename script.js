// รอให้เอกสารโหลดเสร็จ
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // หยุดการส่งฟอร์มไปยัง URL

    // ใช้ fetch เพื่อส่งข้อมูลฟอร์ม
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'ส่งข้อความสำเร็จ',
                text: 'ขอบคุณที่ติดต่อเรา!',
                confirmButtonText: 'ตกลง'
            });
            form.reset();  // รีเซ็ตฟอร์มหลังจากส่ง
        } else {
            throw new Error('ไม่สามารถส่งข้อมูลได้');
        }
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาด',
            text: error.message
        });
    });
  });
});
