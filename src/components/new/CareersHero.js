import React, {useState} from "react"
import Select , { components }from "react-select";
import "./CareersHero.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCaretDown);

const Placeholder = props => {
  return <components.Placeholder {...props} />;
};

const CaretDownIcon = () => {
  return <FontAwesomeIcon icon="caret-down" color="#1F2C38"/>;
};

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};
const style = {
  control: (base, state) => ({
    ...base,
    fontSize:"12px",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0
    }
  }),
  option: (base, state) => ({
    ...base,
    padding:"4px 8px",
    borderRadius:"10px",
    fontSize:"12px",
    fontWeight: state.isSelected ? "700" : "500",
    color: "white",
    backgroundColor: state.data.color,
  })
};
const locationOptions = ["Mumbai", "Bengaluru", "Remote"];
const teamOptions = ["Creative Team", "Engineering", "Internship"];
const cards = [

  {
    title: "Design",
    roles: [{title: "Graphic Design Intern", location: "Remote", url:"https://angel.co/company/thunderpod/jobs/1357209-graphic-designer-intern"}]
  },
  {
    title: "Engineering",
    roles: [{title: "Backend Developer", location: "Remote", url:"https://angel.co/company/thunderpod/jobs/1033227-backend-developer"}]
  },
  {
    title: "Marketing",
    roles: [{title: "Content & Social Media Manager", location: "Remote", url:"https://angel.co/company/thunderpod/jobs/1033229-content-social-media-manager"},
      {title: "Email Marketing Manager", location: "Remote", url:"https://angel.co/company/thunderpod/jobs/1357195-email-marketing-manager"}]
  },
  {
    title: "Sales",
    roles: [{title: "Sales Development Representative", location: "Remote", url:"https://angel.co/company/thunderpod/jobs/1292541-sales-development-representative"}]
  },
]
const CareersHero = (props) => {
  const {demoClick, card} = props;
  const [team, setTeam] = useState(null);
  const [location, setLocation] = useState(null);
  return (
    <div className="d-flex align-items-center justify-content-between careersPageHero">
      <div className="pageHeroWrapper">
        <div className="heroTitle">{card.title}</div>
        {/*<div className="careersControlContainer mt-4">*/}
        {/*  <Select*/}
        {/*    name="location"*/}
        {/*    components={{ Placeholder, DropdownIndicator, IndicatorSeparator: () => null }}*/}
        {/*    theme={theme => ({*/}
        {/*      ...theme,*/}
        {/*      borderRadius: 6,*/}
        {/*    })}*/}
        {/*    style={style}*/}
        {/*    value={location}*/}
        {/*    onChange={(val) => {*/}
        {/*      setLocation(val)*/}
        {/*    }}*/}
        {/*    placeholder="Location"*/}
        {/*    options={locationOptions.map(location => ({label: location, value: location}))}*/}
        {/*  />*/}
        {/*  <Select*/}
        {/*    name="team"*/}
        {/*    components={{ Placeholder, DropdownIndicator,  IndicatorSeparator: () => null }}*/}
        {/*    theme={theme => ({*/}
        {/*      ...theme,*/}
        {/*      borderRadius: 6,*/}
        {/*    })}*/}
        {/*    style={style}*/}
        {/*    value={team}*/}
        {/*    onChange={(val) => {*/}
        {/*      setTeam(val)*/}
        {/*    }}*/}
        {/*    placeholder="Team"*/}
        {/*    options={teamOptions.map(team => ({label: team, value: team}))}*/}
        {/*  />*/}
        {/*  <button className="searchCTA">Search</button>*/}
        {/*</div>*/}
        <div className="openingsContainer mt-4 mx-2 mx-md-0">
          {
            cards.map((card, index) => {
              return (
                <>
                  <div className="openingCategoryTitle mb-1 mt-5 mx-2 mx-md-0 pt-3">{card.title}</div>
                  {
                    card.roles.map((role, index) => {
                      return (
                        <div className="singleOpeningContainer">
                          <div className="openingDescriptionContainer">
                            <div className="roleTitle">{role.title}</div>
                            <div className="roleLocation">{role.location}</div>
                          </div>
                          <a className="applyCTA" href={role.url} target="_blank"
                             rel="noopener noreferrer">Apply</a>
                        </div>
                      )
                    })
                  }

                </>
              )
            })

          }
        </div>
      </div>
    </div>
  )
}
export default CareersHero
