
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'



const App = () => {

  const users= [
    {img:'https://plus.unsplash.com/premium_photo-1661351415837-b4d00e4fbbb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
     intro:'“Building impactful brand stories through data-driven marketing, creativity, and strategic customer engagement.”',
     tag:'Satisfied'
    },
    
    {img:'https://plus.unsplash.com/premium_photo-1723629765877-ee9c9733af41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
     intro:'Visionary designer leading innovative campaigns with passion, creativity, and a commitment to perfection',
     tag:'Underserved'
    },
     
     {img:'https://plus.unsplash.com/premium_photo-1661580702098-b1a081567ba3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
     intro:'“Crafting seamless, user-friendly digital experiences through research, design precision, and intuitive creativity.”',
     tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
