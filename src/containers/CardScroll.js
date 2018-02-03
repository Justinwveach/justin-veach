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

export default class CardScroll extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const LandingCard = wrappedInPageCard(Landing, 1);
        const AboutCard = wrappedInPageCard(About, 2);
        const ExperienceCard = wrappedInPageCard(Experience, 3);
        const ResumeCard = wrappedInPageCard(Resume, 4);
        const WorkCard = wrappedInPageCard(Work, 5);
        const ContactCard = wrappedInPageCard(Contact, 6);
        const FooterCard = wrappedInPageCard(Footer, 7);
        return (
            <div className="CardScroll">
                <LandingCard/>
                <AboutCard/>
                <ExperienceCard/>
                <ResumeCard/>
                <WorkCard/>
                <ContactCard/>
                <FooterCard/>
            </div>
        );
    }
}
