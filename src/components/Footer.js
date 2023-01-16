import React from 'react'

export default function Footer() {
  return (
    <footer>
     <a title="Viber" href="viber://chat?number=375298138690"><img src="./img/Viber.jpg" alt="Написать в Viber" /></a>
     <a title="Whatsapp" href="whatsapp://send?phone=375298138690"><img src="./img/Whatsapp.jpg" alt="Написать в Whatsapp" /></a>
     <a title="Telegram" href="https://telegram.me/mirastom" target={'_blank'}><img src="./img/Telegram.jpg" alt="Telegram" /></a>
     <a href="https://instagram.com/mirastom_vitebsk/" title="Instagram" class="btn-social btn-social_in"><img src="./img/instagram.png" alt="instagram"/></a>
        
      <br/>
        <span className = 'footerText' > < span className = 'boldTextLogo' > Мирастом </span> все права защищены &copy; {new Date().getFullYear()}</span >
    </footer>
  )
}
