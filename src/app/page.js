
import Header from "@/comp/Header"
import Welcome from "@/comp/Welcome"
import Avatar from "@/comp/Avatar"
import Intro from "@/comp/Intro"
import RecentWork from "@/comp/RecentWork"
import Footer from "@/comp/Footer"
import Testimonials from "@/comp/Testimonials"
import Head from "next/head"
import AnalyticsProvider from "@/comp/AnalyticsProvider"
export default function Home() {
  return (
    
    <div>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-MW9LN2RB39`}
        />
        <script>{`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MW9LN2RB39');`}</script>
      </Head>
      <AnalyticsProvider>
      <Header/>
      <Intro/>
      <Avatar/>
      <Welcome/>
      <RecentWork/>
      <Testimonials/>
      <Footer/>
      </AnalyticsProvider>
    </div>
  )
}
