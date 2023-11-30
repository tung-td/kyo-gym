import React, { useState } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import BMICalculator from "../components/BMICalculator/BMICalculator";
import Courses from "../components/Courses/Courses";
import Coaches from "../components/Coaches/Coaches";
import Recipes from "../components/Recipes/Recipes";
import Review from "../components/Review/Review";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
// import { useAuth } from "../AuthContext";

const Homepage = () => {
    // const { user } = useAuth();

    // {user ? ( // Check if the user is logged in
    //             <div>

    //                 {/* Other content for authenticated users */}
    //             </div>
    //         ) : (
    //             <h1>Please log in to view the content</h1>
    //         )}    

    return (
        <div>
            <Header />
            <Banner />
            <BMICalculator />
            <Courses />
            <Recipes />
            <Coaches />
            <Review />
            <Blog />
            <Footer />
        </div>
    );
};

export default Homepage;
