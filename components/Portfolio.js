import { Card, Grid, Text } from "@geist-ui/react";
import styles from "../styles/Portfolio.module.scss";

export default function Portfolio() {
    return <Grid.Container gap={2}>
        <Grid xs={24} md={8}>
            <Text className={ styles.label }>Bio</Text>
        </Grid>
        <Grid xs={24} md={16}>
            <Text className={ styles.text }>
                Fueled by a passion for exploring new different applications of technology and being curious innately, I have, over the years, progressed in my studies and learned a lot on my own, also trying to better understand how I could have an impact through different projects. I was lucky enough to experience the world at a very young age, which helped me a lot in developing my adaptability skills. After living in Hong Kong, Sydney, Munich and France, I decided to enroll at Florida Polytechnic University to pursue my passion for computer programming. I've always had the chance to work on different projects that have always taught me new things (see below). I've always been interested in a lot of things, such as the web, crypto-currencies or engineering with sports like F1 or NASA. I can't wait to see what the future holds for me!
            </Text>
        </Grid>
        <Grid xs={24} md={8}>
            <Text className={ styles.label }>Skills</Text>
        </Grid>
        <Grid xs={24} md={16}>
            <Grid.Container gap={2}>
                <Grid xs={24} md={12}>
                    <Card className={ styles.card }>
                        <Text className={ styles.label }>Web</Text>
                        <Text className={ styles.cardText }>
                            <Text b>HTML, JS, CSS, React, Serverless, TypeScript, GraphQL</Text><br/><br/>
                            <Text b>Usage and examples:</Text><br/>
                            Freelance, Personnal projects, CTO
                        </Text>
                    </Card>
                </Grid>
                <Grid xs={24} md={12}>
                    <Card className={ styles.card }>
                        <Text className={ styles.label }>Mobile</Text>
                        <Text className={ styles.cardText }>
                            <Text b>Swift, iOS, macOS, UIKit, SwiftUI, CloudKit, Xcode</Text><br/><br/>
                            <Text b>Usage and examples:</Text><br/>
                            Personnal projects
                        </Text>
                    </Card>
                </Grid>
                <Grid xs={24} md={12}>
                    <Card className={ styles.card }>
                        <Text className={ styles.label }>Other</Text>
                        <Text className={ styles.cardText }>
                            <Text b>Cryptography, Blockchain, Python, C, Linux, UI Design, UX Design</Text><br/><br/>
                            <Text b>Usage and examples:</Text><br/>
                            Freelance, CTO, School projects
                        </Text>
                    </Card>
                </Grid>
                <Grid xs={24} md={12}>
                    <Card className={ styles.card }>
                        <Text className={ styles.label }>Professional</Text>
                        <Text className={ styles.cardText }>
                            <Text b>Leadership, Project Management, Client Communication</Text><br/><br/>
                            <Text b>Usage and examples:</Text><br/>
                            CTO, School projects, Internships, PLS
                        </Text>
                    </Card>
                </Grid>
            </Grid.Container>
        </Grid>
        <Grid xs={24} md={8}>
            <Text className={ styles.label }>Experience</Text>
        </Grid>
        <Grid xs={24} md={16}>
            <Text className={ styles.text }>
                <Text b>Peer Learning Strategist, Florida Poly (Oct 2021 – Current)</Text><br/>
                I’m supporting out-of-class activities that promote thinking and learning skills for academic growth and success. I helped teachers and students to teach and study better by providing guidelines. This experience has helped me greatly in developing my communication skills
                <br/><br/>
                <Text b>Head of CTO, Cryptool Organization (2017 - 2020)</Text><br/>
                I was in charge of building and maintaining the CrypTool Online platform, an open-source organization that focuses on free e-learning software illustrating cryptographic and cryptanalytic concepts.
                <br/><br/>
                <Text b>Corporate Internship, Natixis Hong Kong (Jun 2018)</Text><br/>
                I was able to do my observation internship at the HK branch of the French investment bank, in the IT department. There, I was able to learn the different jobs in finance, while connecting that to technology. I had the opportunity to work on internal projects as well as talk with employees from different departments.
            </Text>
        </Grid>
        <Grid xs={24} md={8}>
            <Text className={ styles.label }>Education</Text>
        </Grid>
        <Grid xs={24} md={16}>
            <Text className={ styles.text }>
                <Text b>Bachelor of Computer Science, Florida Poly (Jan 2021 – Current)</Text><br/>
                I decided to join Florida Poly to give myself the best chance to succeed. As the initiator of the creation of a technology hub, and located in Florida's tech corridor, Florida Poly is the first STEM university in Florida and is looking forward to growing. It was the perfect opportunity for me to continue my career in an environment marked by space exploration, auto racing and other applications of technology.
            </Text>
        </Grid>
    </Grid.Container>
}