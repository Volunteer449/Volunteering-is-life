<div class="form">
    <form action="https://formsubmit.co/somayah449@gmail.com" method="POST">
        <input type="text" name="name" required placeholder="name"> </input>
            <textarea name="msg" required placeholder="Message"></textarea>
        <button type="submit">ارسال</button>
    </form>
</div>
// تشغيل القائمة البرغر عند الضغط
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
  }
}

// يمكنك إضافة شيفرات أخرى هنا بناءً على ما تحتاجه في مشروعك