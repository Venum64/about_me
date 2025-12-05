import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [headerLogo, setHeaderLogo] = useState('proweb')
  const [listLinks, setListLinks] = useState([
    { id: 1, name: 'Обо мне' },
    { id: 2, name: 'Мои работы' },
    { id: 3, name: 'Контакты' },
  ])

  const [bgText, setBgText] = useState({
    title: 'Добро пожаловать на мой сайт',
    desc: 'Позвонить'
  })


  const [portfolio, setPortfolio] = useState({
    title: 'Обо мне',
    textTitle: 'Зубенко Михаил Петрович',
    textDesc:
      'Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа.'
  })

  const [works, setWorks] = useState({
    title: 'Мои работы',
    items: Array.from({ length: 9 }).map((_, i) => ({
      id: i + 1,
      cardTitle: 'Чиланзар',
      cardDesc:
        'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году',
      cardBtn: 'Посмотреть'
    }))
  })

  const [footerTitle, setFooterTitle] = useState('Связаться со мной')
  return (
    <Navbar headerLogo={headerLogo} listLinks={listLinks} bgText={bgText} portfolio={portfolio} works={works} footerTitle={footerTitle}/>
  )
}

export default App