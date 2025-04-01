
"use client"
import ContactHeader from '../../Components/Headers/ContactHeader.jsx';
import { Tabs } from '../../Components/Misc/Tabs.jsx';
import { ConsultationForm } from '../../Components/Forms/ConsultationForm.jsx';
import { VisitForm } from '../../Components/Forms/VisitForm.jsx';

function Contact() {
    return (
        <>
            <ContactHeader />            
            <div className="contact-section">
                <div className="contact-section-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="contact-form-wrapper">
                                    <Tabs
                                        labelListClass={'contact-form-tab'}
                                        tabs={[
                                            {
                                                id: 'tab-1',
                                                tabLabel: 'Strategy Session',
                                                content: <ConsultationForm/>
                                            },
                                            {
                                                id: 'tab-2',
                                                tabLabel: 'Say Hello',
                                                content: <VisitForm/>
                                            }
                                        ]}
                                    />                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
