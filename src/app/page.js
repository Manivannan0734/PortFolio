import Header from "@/comp/Header"
import Welcome from "@/comp/Welcome"
import Avatar from "@/comp/Avatar"
import Intro from "@/comp/Intro"
import RecentWork from "@/comp/RecentWork"
import Footer from "@/comp/Footer"

export default function Home() {
  return (
    <div>
      <Header/>
    
      <Intro/>
      <Avatar/>
      <Welcome/>
      
      
      <RecentWork/>
      <Footer/>
    </div>
  )
}
