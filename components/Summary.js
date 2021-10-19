import { Card, Grid } from "@geist-ui/react";

export default function Summary() {
    return <Card style={{
        background: "var(--white)",
        border: "1px solid var(--text-color)",
        boxSizing: "border-box",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(100px)",
        borderRadius: "50px",
        width: "100%",
        marginTop: "20px"
    }}>
        <Grid.Container gap={2} justify="center" wrap="wrap">
            <Grid xs={24} sm={12} md={6}>
                <div className="feature">
                    <div className="icon globe" />
                    <div className="description">
                        <b>Languages Spoken</b><br/>
                        French | English
                    </div>
                </div>
            </Grid>
            <Grid xs={24} sm={12} md={6}>
                <div className="feature">
                    <div className="icon code" />
                    <div className="description">
                        <b>5000+ Contributions</b><br/>
                        On open-source projects
                    </div>
                </div>
            </Grid>
            <Grid xs={24} sm={12} md={6}>
                <div className="feature">
                    <div className="icon interest" />
                    <div className="description">
                        <b>Interested in many fields</b><br/>
                        Economy, Design, Travel, and more!
                    </div>
                </div>
            </Grid>
            <Grid xs={24} sm={12} md={6}>
                <div className="feature">
                    <div className="icon experience" />
                    <div className="description">
                        <b>6 years of experience</b><br/>
                        In computer programming
                    </div>
                </div>
            </Grid>
        </Grid.Container>
        <style jsx>{`
        .feature {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: var(--text-color);
        }
        .globe {
            background: url(/img/globe.svg);
        }
        .code {
            background: url(/img/code.svg);
        }
        .interest {
            background: url(/img/interest.svg);
        }
        .experience {
            background: url(/img/experience.svg);
        }
        .icon {
            width 70px;
            height: 36px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        @media (prefers-color-scheme: dark) {
            .icon {
                filter: invert(1);
            }
        }
        `}</style>
    </Card>
}