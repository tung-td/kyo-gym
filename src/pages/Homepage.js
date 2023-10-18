import React from "react"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import BMICalculator from "../components/BMICalculator/BMICalculator"
import Courses from "../components/Courses/Courses"
import Coaches from "../components/Coaches/Coaches"
import Recipes from "../components/Recipes/Recipes"
import Review from "../components/Review/Review"
import Blog from "../components/Blog/Blog"
import Footer from "../components/Footer/Footer"

const Homepage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BMICalculator />
            <Courses />
            <Coaches />
            <Recipes />
            <Review />
            <Blog />
            <Footer />
        </div>
    )
}

export default Homepage;