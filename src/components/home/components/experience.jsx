import React, {Component} from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Experience extends Component {
    render() {
        return (
            <div>
                <section id="experience" className="experience ">
                    <div className="container">

                        <div className="section-title ">
                            <h2>Experience</h2>
                        </div>
                        <Timeline align="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        2020-Sep - current
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot>
                                    </TimelineDot>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="p-2">
                                        <Typography variant="h6">
                                            Java Developer
                                        </Typography>
                                        <Typography variant="subtitle1" className="text-black-50">
                                            FNB South Africa (nav»)
                                        </Typography>
                                        <Typography variant="body2" display="block">
                                            Springboot
                                            <br/>
                                            RestAPI - Microservices
                                            <br/>
                                            Angular
                                            <br/>
                                            Server-Side Scripting
                                            <br/>
                                            Docker
                                            <br/>
                                            Continuous Integration

                                        </Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        2020 Feb - 2020 Aug
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary">
                                    </TimelineDot>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="p-2">
                                        <Typography variant="h6">
                                            Junior Java Developer
                                        </Typography>
                                        <Typography variant="subtitle1" className="text-black-50">
                                            FNB South Africa (nav»)
                                        </Typography>
                                        <Typography variant="body2">
                                            created a portal using springboot, Angular and Mysql,
                                            also made changes to app
                                        </Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        2019 Feb - 2019 May
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" variant="outlined">
                                    </TimelineDot>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="p-2">
                                        <Typography variant="h6">
                                            Java Developer Intern
                                        </Typography>
                                        <Typography variant="subtitle1" className="text-black-50">
                                            FNB South Africa (Forex)
                                        </Typography>
                                        <Typography variant="body2">
                                            created an in house web application using Angular
                                        </Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        (Feb 2016 – Feb 2017)
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary">
                                    </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="p-2">
                                        <Typography variant="h6">
                                            Business Admin intern
                                        </Typography>
                                        <Typography variant="subtitle1" className="text-black-50">
                                            DAV Professional Placement Group (Division of Adcorp)
                                        </Typography>
                                        <Typography variant="body2">
                                            <em> Finance Department</em> – Assisted with General Filing, Invoicing,
                                            generating reports, Creating POs and PRs.
                                            <br/>
                                            <em>Facilities & Maintenance Department</em> – Assisted with general building
                                            maintenance (including replacing printer toner, changing light bulbs,
                                            etc.), setting up for boardroom meetings, activation of Access cards or
                                            tags, installed printers on company PCs and Laptops and worked on
                                            stock take sheets.
                                            <br/>
                                            <em>Office Coordinator Department</em> – Assisted with Coordinating the
                                            Company meetings, created MS PowerPoint presentations, recording
                                            company meetings and events.
                                        </Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;