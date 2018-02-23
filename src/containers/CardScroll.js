import React, { Component } from 'react';
import './CardScroll.css';
import wrappedInPageCard from '../components/PageCard'
import Landing from './Landing'
import About from './About'
import Experience from './Experience'
import Resume from './Resume'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'
import Project from './Project'
import Separator from './Separator'

export default class CardScroll extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const LandingCard = wrappedInPageCard(Landing, 1);
        const AboutCard = wrappedInPageCard(About, 2);
        const ProjectSeparatorCard = wrappedInPageCard(Separator, 3);
        const ProjectCard = wrappedInPageCard(Project, 4)
        const ProjectCardTwo = wrappedInPageCard(Project, 5)
        const ProjectCardThree = wrappedInPageCard(Project, 6)
        const ProjectCardFour = wrappedInPageCard(Project, 7)
        //const ProjectCardFive = wrappedInPageCard(Project, 8)
        const ExperienceSeparatorCard = wrappedInPageCard(Separator, 8)
        const ExperienceCard = wrappedInPageCard(Experience, 9)
        const ResumeCard = wrappedInPageCard(Resume, 10)
        //const FooterCard = wrappedInPageCard(Footer, 11);
        const EndSeparatorCard = wrappedInPageCard(Separator, 11)
        const indoorMappingDescription = "While working at Lokion Interactive, I was part of a small team that built an Indoor Mapping product from the ground up. My primary contributions included creating, maintaining, and testing the Android SDK, while assisting when needed on the iOS side."
        const qScopeDescription = "This app was one of the larger and impactful apps I built while at International Paper. Essentially, the app provided a way for workers to document the quality of shipping containers during the process of loading the product. It potentially saved the company millions in damaged product claims by proving the product was in good condition when shipped."
        const airCentralDescription = "As freelance work, I created a new, modern website for a local Heating and Air Conditioning business. I built the website with React and followed guidelines to help with SEO."
        const portionTrackerDescription = "Portion Tracker is an app I created to help users easily keep track of how many portions they eat in a day. I hated counting every single calorie while dieting and wanted a general idea of how many calories I was consuming in a day."

        return (
            <div className="CardScroll">
                <LandingCard/>
                <AboutCard title="About"/>
                <ProjectSeparatorCard title="Recent Projects" subtitle="Below are few projects that I've worked on. "/>
                <ProjectCard title="Indoor Mapping" description={indoorMappingDescription} link="http://aegirmaps.com" linkTitle="View Product" projectImage="aegir" smallImageDirection="left"/>
                <ProjectCardTwo title="QScope" description={qScopeDescription} projectImage="qscope" smallImageDirection="right"/>
                <ProjectCardThree title="Air Central Website" description={airCentralDescription} link="http://aircentralms.com" linkTitle="View Website" projectImage="aircentral" smallImageDirection="none"/>
                <ProjectCardFour title="Portion Tracker" description={portionTrackerDescription} link="https://itunes.apple.com/us/app/portion-tracker/id1192811136?mt=8" linkTitle="View App in App Store" projectImage="portiontracker" smallImageDirection="left"/>
                <ExperienceSeparatorCard title="Experience" subtitle="What I've done and learned along the way."/>
                <ExperienceCard/>
                <ResumeCard/>
                {/*<ProjectCardFive title="Whirly Dirly Words" description=""/>*/}
                <EndSeparatorCard title="The End" subtitle=""/>
            </div>
        );
    }
}
