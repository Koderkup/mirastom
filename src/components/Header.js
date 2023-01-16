import React from 'react'

export default function Header() {
  return (
   <header>
       <div>
           <span className='logo'><span className='boldTextLogo'>Мирастом</span> - стоматологическая клиника Витебска</span>
       </div>
       <nav className='headerList'>
           <ul>
               <li>О нас</li>
               <li>Контакты</li>
               <li>Услуги</li>
               <li>Главная</li>
           </ul>
       </nav>
       <div className='presentation'></div>
   </header>
  )
}
