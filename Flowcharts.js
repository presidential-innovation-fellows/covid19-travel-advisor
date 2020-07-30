const flowcharts = [
    {
        "id": 1,
        "flow": {
            "start": {
                "type": "statement",
                "short": "Travel Advisories",
                "theme": "white-card",
                "text": "With the number of coronavirus cases surging across the country, check the areas you plan to visit before you travel.",
                "info": "",
                "next": "b1"
            },
            "b1": {
                "type": "select_decision",
                "text": "Select a State you want to travel to? $US_STATES <hr>",
                "theme": "white-card",
                "short": "",
                "sms" : "Select a State?",
                "info": "",                
            },            
            "default": {
                "type": "statement",
                "short": "",
                "theme": "white-card",
                "text": "As of July 21, 2020 no statewide restrictions are found for this state.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html'>More Info</a>`,                
                "next" : "",
            },
            "AL": {
                "type": "statement",
                "short": "Alabama",
                "theme": "white-card",
                "text": `As of July 21, there were no statewide restrictions in Alabama.`,
                "info": `<a style='color: royalblue;' target='_blank' href='https://alabama.travel/my-trip/staying-safe'>More Info</a>`,                
                "next" : "",
            },
            "AK": {
                "type": "statement",
                "short": "Alaska",
                "theme": "white-card",
                "text": `You are required to fill a 
                        '<a href='https://covid19.alaska.gov/wp-content/uploads/2020/06/06112020-Mandate-10-Travel-declaration-form-Ver-2.0-6-10-f.pdf' style='color: royalblue;' target='_blank'> 
                        Mandatory Declaration Form</a>`,
                "info": `<a style='color: royalblue;' target='_blank' href='https://covid19.alaska.gov/travelers/'>More Info</a>`,
                "next" : ""
            },
            "CT": {
                "type": "statement",
                "short": "Connecticut",
                "theme": "white-card",
                "text": "You are required to fill a <a href='https://appengine.egov.com/apps/ct/DPH/Connecticut-Travel-Health-Form'> Mandatory Declaration Form</a>",
                "info": `<a style='color: royalblue;' target='_blank' href='https://portal.ct.gov/Coronavirus/travel'>More Info</a>`,
                "next" : ""                
            },

            "DC": {
                "type": "bool_decision",
                "short": "District of Columbia",
                "theme": "white-card",
                "text": "Are you traveling from Maryland or Virginia?",
                "info": `<a style='color: royalblue;' target='_blank' href='https://washington.org/dc-information/coronavirus-travel-update-washington-dc'>More Info</a>`,
                "yes" : "DC-MD-VA",
                "no":   "DC-Non-MD-VA"                
            },
            "DC-MD-VA": {
                "type": "statement",
                "short": "DC - MD/VA Visitor",
                "theme": "white-card",
                "text": "Maryland and Virginia visitors are exempt from quarantine restrictions.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://washington.org/dc-information/coronavirus-travel-update-washington-dc'>More Info</a>`,
                "next" : ""                                
            },
            "DC-Non-MD-VA": {
                "type": "statement",
                "short": "District of Columbia",
                "theme": "white-card",
                "text": "You must self-quarantine yourself for two weeks, if you are making a non-essential trip from a <a href='https://coronavirus.dc.gov/release/dc-health-releases-list-high-risk-states'> High Risk Area</a>",
                "info": `<a style='color: royalblue;' target='_blank' href='https://coronavirus.dc.gov/release/dc-health-releases-list-high-risk-states'>More Info</a>`,
                "next" : ""                
            },

            "FL": {
                "type": "statement",
                "short": "Florida",
                "theme": "white-card",
                "text": "People from New York, New Jersey and Connecticut must self-quarantine at their own expense for 14 days when they enter Florida. Violators may be fined up to $500 or imprisoned for up to 60 days.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://floridahealthcovid19.gov/travelers/'>More Info</a>`,
                "next" : ""                
            },            
            "HI": {
                "type": "statement",
                "short": "Hawaii",
                "theme": "white-card",
                "text": "All those arriving in Hawaii must isolate for two weeks, or until the end of their stay, whichever is shorter. Violators may face up to a $5,000 fine and up to a year in prison. Beginning Sept. 1, travelers can avoid that restriction by showing proof of a negative test taken within 72 hours of their trip.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.hawaiitourismauthority.org/news/alerts/covid-19-novel-coronavirus/'>More Info</a>`,
                "next" : ""                
            },
            "ID": {
                "type": "statement",
                "short": "Idaho",
                "theme": "white-card",
                "text": "Travelers to Boise and other cities in Ada County are encouraged to self-quarantine for 14 days. Other counties in the state are further along in their reopening and don’t have a similar request.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://visitidaho.org/covid-19-travel-alert/'>More Info</a>`,
                "next" : ""                
            },
            "IL": {
                "type": "bool_decision",
                "short": "Illinois",
                "theme": "white-card",
                "text": "Are you traveling to Chicago?",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.dph.illinois.gov/topics-services/diseases-and-conditions/diseases-a-z-list/coronavirus/travel-guidance'>More Info</a>`,
                "yes" : "IL-Chicago",
                "no": "IL_NotChicago"                
            },
            "IL-Chicago": {
                "type": "statement",
                "short": "Illinois - Chicago",
                "theme": "white-card",
                "text": "those entering or returning to Chicago from Alabama, Arizona, Arkansas, California, Florida, Georgia, Idaho, Iowa, Kansas (beginning July 24), Louisiana, Mississippi, Nevada, North Carolina, Oklahoma, South Carolina, Tennessee, Texas and Utah are required to self-quarantine for 14 days from their last contact with those states. Those violating the order face fines of up to $500 per day, up to a maximum of $7,000.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.chicago.gov/city/en/sites/covid-19/home.html'>More Info</a>`,
                "next" : ""                
            },
            "IL_NotChicago": {
                "type": "statement",
                "short": "Illinois - Not Chicago",
                "theme": "white-card",
                "text": "There are no statewide restrictions.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.dph.illinois.gov/topics-services/diseases-and-conditions/diseases-a-z-list/coronavirus/travel-guidance'>More Info</a>`,
                "next": ""
            },
            "KS": {
                "type": "statement",
                "short": "Kansas",
                "theme": "white-card",
                "text": "Those who have traveled to Florida need to quarantine for 14 days after arrival in Kansas. This applies to both Kansas residents and those visiting Kansas.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.coronavirus.kdheks.gov/175/Travel-Exposure-Related-Isolation-Quaran'>More Info</a>`,
                "next": ""
            },
            "KY": {
                "type": "statement",
                "short": "Kentucky",
                "theme": "white-card",
                "text": "Travelers who visited Alabama, Arizona, Florida, Georgia, Idaho, Mississippi, Nevada, South Carolina, Texas, and Puerto Rico are asked to self-quarantine for 14 days.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://governor.ky.gov/covid19'>More Info</a>`,
                "next": ""
            },

            "ME": {
                "type": "statement",
                "short": "Maine",
                "theme": "white-card",
                "text": "Only residents of Vermont, New Hampshire, Connecticut, New York and New Jersey who stay in commercial lodging in Maine can enter the state without restriction. Everyone else must either self-quarantine for 14 days, or sign a document stating that they tested negative within the previous 72 hours.<br>Maine residents who travel out of state to a state not on the exempted list must also quarantine when they return or test negative for the virus.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.maine.gov/covid19/restartingmaine/keepmainehealthy/faqs'>More Info</a>`,
                "next": "",                
            },

            "MA": {
                "type": "bool_decision",
                "short": "Massachusetts",
                "theme": "white-card",
                "text": "Are you arriving from Connecticut, Hawaii, Maine, New Hampshire, New Jersey, New York, Rhode Island or Vermont?",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.mass.gov/info-details/covid-19-updates-and-information'>More Info</a>`,
                "yes": "MA-YES",
                "no": "MA-NO",
            },

            "MA-YES": {
                "type": "statement",
                "short": "Massachusetts - Exempt",
                "theme": "white-card",
                "text": "You are exempt from quarantine requirements.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.mass.gov/info-details/covid-19-travel-order'>More Info</a>`,
                "next": ""
            },
            "MA-NO": {
                "type": "statement",
                "short": "Massachuesetts - Non Exempt",
                "theme": "white-card",
                "text": "Effective Aug. 1, all travelers, including residents of the state who are returning home, are required to fill out and submit an online health form and self-quarantine for 14 days",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.mass.gov/forms/massachusetts-travel-form'>Online Form</a>`,
                "next": ""
            },

            "NH": {
                "type": "bool_decision",
                "short": "New Hampshire",
                "theme": "white-card",
                "text": "Are you traveling to New Hampshire from surrounding New England States (Maine, Vermont, Massachusetts, Connecticut, Rhode Island)?",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.covidguidance.nh.gov/out-state-visitors'>More Info</a>`,
                "yes": "",
                "no": ""
            },

            "NH-YES": {
                "type": "statement",
                "short": "New Hampshire - New England",
                "theme": "white-card",
                "text": "The two week self-quarantine has been lifted for those traveling to New Hampshire from surrounding New England States (Maine, Vermont, Massachusetts, Connecticut, Rhode Island). ",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.covidguidance.nh.gov/out-state-visitors'>More Info</a>`,
                "next": ""
            },
            "NH-NO": {
                "type": "statement",
                "short": "NH - Non New England",
                "theme": "white-card",
                "text": "Those traveling to New Hampshire from non-New England states for an extended period of time are still asked to self-quarantine for a two-week period.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.covidguidance.nh.gov/out-state-visitors'>More Info</a>`,
                "next": ""
            },
            "NJ": {
                "type": "statement",
                "short": "New Jersey",
                "theme": "white-card",
                "text": "Are you traveling from Alaska, Alabama, Arizona, Arkansas, California, Delaware, Florida, Georgia, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maryland, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Mexico, North Carolina, North Dakota, Ohio, Oklahoma, South Carolina, Tennessee, Texas, Utah, Virginia, Washington, Wisconsin, Puerto Rico, or Washington D.C.?",
                "info": `<a style='color: royalblue;' target='_blank' href=''>More Info</a>`,
                "yes": "NJ-YES",
                "no": "NJ-NO"
            },
            "NJ-YES": {
                "type": "statement",
                "short": "NJ - Self Quarantine",
                "theme": "white-card",
                "text": "You must  <b>self-quarantine</b>. Starting July 27, you are asked to voluntarily supply contact information and details about where you plan on staying. ",
                "info": `<a style='color: royalblue;' target='_blank' href='https://covid19.nj.gov/forms/njtravel'>Online Form</a>`,
                "next": ""
            },
            "NJ-NO": {
                "type": "statement",
                "short": "NJ - Non Quarantine",
                "theme": "green-card",
                "text": "You are exempt from self-quarantine.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://covid19.nj.gov/faqs/nj-information/general-public/which-states-are-on-the-travel-advisory-list-are-there-travel-restrictions-to-or-from-new-jersey'>More Info</a>`,
                "next": ""
            },
            "NM": {
                "type": "statement",
                "short": "New Mexico",
                "theme": "white-card",
                "text": "Most people, including residents who have traveled, are required to self-quarantine for 14 days or the duration of their stay, whichever is shorter.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.newmexico.org/covid-19-traveler-information/'>More Info</a>`,
                "next": ""
            },
            "NY": {
                "type": "bool_decision",
                "short": "New York",
                "theme": "white-card",
                "text": "Are you arriving in New York on an NY Airport?",
                "info": `<a style='color: royalblue;' target='_blank' href='https://coronavirus.health.ny.gov/covid-19-travel-advisory'>More Info</a>`,
                "yes": "NY-AIRPORT",
                "no": "NY-NON-AIRPORT"
            },
            "NY-AIRPORT": {
                "type": "statement",
                "short": "New York - Airport",
                "theme": "white-card",
                "text": "Travelers arriving at airports in New York must fill out a Health Department traveler form, or face a possible $2,000 fine and a mandatory quarantine order.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://forms.ny.gov/s3/Welcome-to-New-York-State-Traveler-Health-Form'>Online Form</a>`,
                "next": "NY-ARRIVINGFROM"
            },
            "NY-ARRIVINGFROM": {
                "type": "bool_decision",
                "short": "NY - Non-Airport",
                "theme": "white-card",
                "text": "Have you spent more than 24 hours in Alaska, Alabama, Arizona, Arkansas, California, Delaware, Florida, Georgia, Idaho, Illinois, Indiana, Iowa, Kansas,  Kentucky, Louisiana, Maryland, Mississippi, Minnesota, Missouri, Montana, Nebraska, Nevada, New Mexico, North Carolina, North Dakota, Ohio, Oklahoma, South Carolina, Tennessee, Texas, Utah, Virginia, Washington, Wisconsin, Puerto Rico or Washington DC?",
                "info": `<a style='color: royalblue;' target='_blank' href='https://coronavirus.health.ny.gov/covid-19-travel-advisory'>More Info</a>`,
                "yes": "NY-QUARANTINE",
                "no": "NY-NO-QUARANTINE",
            },
            "NY-QUARANTINE": {
                "type": "statement",
                "short": "NY - Quarantine",
                "theme": "orange-card",
                "text": "You must self-quarantine for 14 days.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://coronavirus.health.ny.gov/covid-19-travel-advisory'>Online Form</a>`,
                "next": ""
            },
            "NY-NO-QUARANTINE": {
                "type": "statement",
                "short": "NY - No Quarantine",
                "theme": "cyan-card",
                "text": "You are exempt from self-quarantine.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://coronavirus.health.ny.gov/covid-19-travel-advisory'>Online Form</a>`,
                "next": ""
            },

            "OH": {
                "type": "bool_decision",
                "short": "Ohio",
                "theme": "white-card",
                "text": "Traveling Ohioans and out-of-state tourists who have visited an area of high risk, or who have had possible exposure to the coronavirus, are asked to voluntarily quarantine for 14 days.<br>Are you traveling from Alabama, Arizona, Florida, Georgia, Idaho, Mississippi, Nevada, South Carolina or Texas?",
                "info": `<a style='color: royalblue;' target='_blank' href=''>More Info</a>`,
                "yes": "",
                "no": ""
            },
            "OH-YES": {
                "type": "statement",
                "short": "OH - Quarantine",
                "theme": "white-card",
                "text": "Please self-quarantine for 14-days.",
                "info": `<a style='color: royalblue;' target='_blank' href=''>More Info</a>`,
                "next": ""
            },
            "OH-NO": {
                "type": "statement",
                "short": "OH - Non Quarantine",
                "theme": "green-card",
                "text": "You are exempt from self-quarantine.",
                "info": `<a style='color: royalblue;' target='_blank' href=''>More Info</a>`,
                "next": ""
            },
            "PA": {
                "type": "bool_decision",
                "short": "Pennsylvania",
                "theme": "white-card",
                "text": "Are you traveling from Alabama, Arizona, Arkansas, California, Florida, Georgia, Idaho, Iowa, Kansas, Louisiana, Mississippi, Nevada, North Carolina, Oklahoma, South Carolina, Tennessee, Texas or Utah?",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.health.pa.gov/topics/disease/coronavirus/Pages/Travelers.aspx'>More Info</a>`,
                "yes": "PA-YES",
                "no": "PA-NO"
            },
            "PA-YES": {
                "type": "statement",
                "short": "PA - Quarantine",
                "theme": "orange-card",
                "text": "Please self-quarantine for 14 days",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.health.pa.gov/topics/disease/coronavirus/Pages/Travelers.aspx'>More Info</a>`,
                "next": ""
            },
            "PA-NO": {
                "type": "statement",
                "short": "PA - Non Quarantine",
                "theme": "green-card",
                "text": "You are exempt from self-quarantine.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://www.health.pa.gov/topics/disease/coronavirus/Pages/Travelers.aspx'>More Info</a>`,
                "next": ""
            },
            "RI": {
                "type": "statement",
                "short": "Rhodes Island",
                "theme": "white-card",
                "text": "If you are traveling from a state that has a positivity rate for tests of greater than 5 percent are required to self-quarantine for two weeks. Alternatively, visitors can provide a negative test for the virus that was taken within the previous 72 hours. A person who receives a negative test during their quarantine can stop isolating, although the state recommends the full two-week quarantine.",
                "info": `<a style='color: royalblue;' target='_blank' href='https://health.ri.gov/covid/'>More Info</a>`,
                "next": ""
            },
            "SC": {
                "type": "statement",
                "short": "South Carolina",
                "theme": "white-card",
                "text": "If you have visited an area with widespread or ongoing community transmission of the virus stay home for 14 days from the time they left that region.",
                "info": `<a style='color: royalblue;' target='_blank' href=''>More Info</a>`,
                "next": ""
            },
            
            "": {
                "type": "statement",
                "short": "",
                "theme": "white-card",
                "text": "",
                "info": `<a style='color: royalblue;' target='_blank' href=''>More Info</a>`,
                "next": ""
            },



        },    
    }          
];

module.exports = flowcharts;

// const helpers = require('./helpers');
// var flowcharts = [];
// console.log('flowcharts data', flowcharts);
// if(flowcharts.length == 0) {
//     helpers.loadJSONData('./data/flows.json');
//     console.log('loaded flowcharts data');
// }

// module.exports.flowcharts = flowcharts;