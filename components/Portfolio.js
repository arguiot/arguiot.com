import { Card, Grid, Text } from "@geist-ui/react";
import classNames from "classnames";
import styles from "../styles/Portfolio.module.scss";

export default function Portfolio() {
    return <Grid.Container gap={2}>
        <Grid xs={24} md={8}>
            <Text className={styles.label}>Bio</Text>
        </Grid>
        <Grid xs={24} md={16}>
            <Text className={styles.text}>
                I am a software engineering student at Florida Polytechnic University. I have had the opportunity to live all over the world, and to work with people from different cultures on many projects. Over the years, I have accumulated a lot of experience in application development, website development, and specialised programs, especially in the field of cryptography. Indeed, I have been very involved in several projects, such as CrypTool (popular educational software) allowing me to practice my technical, professional and leadership skills. Today, I work as a freelancer in my spare time, allowing me to contribute my expertise, gain skills and work in a fast paced environment that suits me. Fuelled by a passion for exploring new different applications of technology and being curious innately I am particularly interested in the new possibilities that blockchain offers and want to pursue a career in the technology and finance sector.
            </Text>
        </Grid>
        <Grid xs={24} md={8}>
            <Text className={styles.label}>Skills</Text>
        </Grid>
        <Grid xs={24} md={16}>
            <Grid.Container gap={2}>
                <Grid xs={24} md={12}>
                    <Card className={styles.card}>
                        <Text className={styles.label}>Front-End</Text>
                        <Text className={styles.cardText}>
                            <Text b>UI Design, UX Design, CSS, React, SwiftUI, UIKit, AppKit</Text><br /><br />
                            <Text b>Usage and examples:</Text><br />
                            Freelance, Personnal projects, CTO
                        </Text>
                    </Card>
                </Grid>
                <Grid xs={24} md={12}>
                    <Card className={styles.card}>
                        <Text className={styles.label}>Back-End</Text>
                        <Text className={styles.cardText}>
                            <Text b>Swift, C & C++, NodeJS, SQL, GraphQL, Web 3.0, Solidity, Rust</Text><br /><br />
                            <Text b>Usage and examples:</Text><br />
                            Personnal projects
                        </Text>
                    </Card>
                </Grid>
                <Grid xs={24} md={12}>
                    <Card className={styles.card}>
                        <Text className={styles.label}>Other</Text>
                        <Text className={styles.cardText}>
                            <Text b>Python, Git, Linux, AWS, DevOps</Text><br /><br />
                            <Text b>Usage and examples:</Text><br />
                            Freelance, CTO, School projects
                        </Text>
                    </Card>
                </Grid>
                <Grid xs={24} md={12}>
                    <Card className={styles.card}>
                        <Text className={styles.label}>Professional</Text>
                        <Text className={styles.cardText}>
                            <Text b>Leadership, Project Management, Client Communication</Text><br /><br />
                            <Text b>Usage and examples:</Text><br />
                            CTO, School projects, Internships, PLS
                        </Text>
                    </Card>
                </Grid>
            </Grid.Container>
        </Grid>
        <Grid xs={24} md={8}>
            <Text className={styles.label}>Experience</Text>
        </Grid>
        <Grid xs={24} md={16}>
            <Text className={styles.text}>
                <Text b>Peer Learning Strategist, Florida Poly (Oct 2021 – Current)</Text><br />
                I’m supporting out-of-class activities that promote thinking and learning skills for academic growth and success. I helped teachers and students to teach and study better by providing guidelines. This experience has helped me greatly in developing my communication skills
                <br /><br />
                <Text b>Head of CTO, Cryptool Organization (2017 - 2020)</Text><br />
                I was in charge of building and maintaining the CrypTool Online platform, an open-source organization that focuses on free e-learning software illustrating cryptographic and cryptanalytic concepts.
                <br /><br />
                <Text b>Corporate Internship, Natixis Hong Kong (Jun 2018)</Text><br />
                I was able to do my observation internship at the HK branch of the French investment bank, in the IT department. There, I was able to learn the different jobs in finance, while connecting that to technology. I had the opportunity to work on internal projects as well as talk with employees from different departments.
            </Text>
        </Grid>
        <Grid xs={24} md={8}>
            <Text className={styles.label}>Education</Text>
        </Grid>
        <Grid xs={24} md={16}>
            <Text className={styles.text}>
                <Text b>Bachelor of Computer Science, Florida Poly (Jan 2021 – Current)</Text><br />
                I decided to join Florida Poly to give myself the best chance to succeed. As the initiator of the creation of a technology hub, and located in Florida's tech corridor, Florida Poly is the first STEM university in Florida and is looking forward to growing. It was the perfect opportunity for me to continue my career in an environment marked by space exploration, auto racing and other applications of technology.
            </Text>
        </Grid>
        <Grid xs={24} md={8}>
            <Text className={styles.label}>Featured Projects</Text>
        </Grid>
        <Grid xs={24} md={16}>
            <Grid.Container gap={2}>
                <Grid xs={24} md={8}>
                    <Card className={styles.card}>
                        <img src="/img/euclid-ios_102x102@1x.png" alt="Euclid iOS" className={styles.cardImg} />
                        <Text className={styles.label} align="center"><a href="https://euclid.pr1mer.tech" target="_blank">Euclid Calculator</a></Text>
                        <Text className={styles.cardText} style={{ textAlign: "left " }}>
                            <Text b>Euclid is a completely redesigned calculator for macOS and iOS</Text><br /><br />
                            <Text b>Success:</Text><br />
                            Recommended by <a href="https://setapp.com/apps/euclid" target="_blank">SetApp</a>, 50K+ downloads
                        </Text>
                    </Card>
                </Grid>
                <Grid xs={24} md={8}>
                    <Card className={styles.card}>
                        <img src="/img/masecondecabane_102x102@1.png" alt="Ma Seconde Cabane" className={styles.cardImg} />
                        <Text className={styles.label} align="center"><a href="https://masecondecabane.com" target="_blank">Ma Seconde Cabane</a></Text>
                        <Text className={styles.cardText} style={{ textAlign: "left " }}>
                            <Text b>MSC is an online store for second hand children's clothing</Text><br /><br />
                            <Text b>Experience:</Text><br />
                            E-Commerce website completely handmade
                        </Text>
                    </Card>
                </Grid>
                <Grid xs={24} md={8}>
                    <Card className={styles.card}>
                        <img src="/img/aire_102x102@1.png" alt="AIRE Payments" className={classNames(styles.cardImg, styles.darkInvert)} />
                        <Text className={styles.label} align="center"><a href="https://aire.pr1mer.tech" target="_blank">AIRE Payments</a></Text>
                        <Text className={styles.cardText} style={{ textAlign: "left " }}>
                            <Text b>A demo of an internal, real-time payment network for education based on blockchain.</Text><br /><br />
                            <Text b>Experience:</Text><br />
                            Solid understanding of Ethereum, Web3, and smart contracts
                        </Text>
                    </Card>
                </Grid>
            </Grid.Container>
        </Grid>
    </Grid.Container>
}
