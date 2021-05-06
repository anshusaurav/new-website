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
    title: "Creative team",
    countRoles: 2,
    roles: [{title: "Brand manager", location: "Mumbai"}, {title: "Graphic designer", location: "Mumbai"}]
  },
  {
    title: "Engineering",
    countRoles: 2,
    roles: [{title: "Android engineer", location: "Bengaluru"}, {title: "Backend developer", location: "Bengaluru"}]
  },
  {
    title: "Internship",
    countRoles: 1,
    roles: [{title: "Marketing / Operations intern", location: "Bengaluru"}]
  }
]
const CareersHero = (props) => {
  const {demoClick, card} = props;
  const [team, setTeam] = useState(null);
  const [location, setLocation] = useState(null);
  return (
    <div className="d-flex align-items-center justify-content-between careersPageHero">
      <div className="pageHeroWrapper">
        <div className="heroTitle">{card.title}</div>
        <div className="careersControlContainer mt-4">
          <Select
            name="location"
            components={{ Placeholder, DropdownIndicator, IndicatorSeparator: () => null }}
            theme={theme => ({
              ...theme,
              borderRadius: 6,
            })}
            style={style}
            value={location}
            onChange={(val) => {
              setLocation(val)
            }}
            placeholder="Location"
            options={locationOptions.map(location => ({label: location, value: location}))}
          />
          <Select
            name="team"
            components={{ Placeholder, DropdownIndicator,  IndicatorSeparator: () => null }}
            theme={theme => ({
              ...theme,
              borderRadius: 6,
            })}
            style={style}
            value={team}
            onChange={(val) => {
              setTeam(val)
            }}
            placeholder="Team"
            options={teamOptions.map(team => ({label: team, value: team}))}
          />
          <button className="searchCTA">Search</button>
        </div>
        <div className="openingsContainer mt-4 mx-2 mx-md-0">
          {
            cards.map((card, index) => {
              return (
                <>
                  <div className="openingCategoryTitle mb-2 mt-5 mx-2 mx-md-0">{card.title}</div>
                  {
                    card.roles.map((role, index) => {
                      return (
                        <div className="singleOpeningContainer">
                          <div className="openingDescriptionContainer">
                            <div className="roleTitle">{role.title}</div>
                            <div className="roleLocation">{role.location}</div>
                          </div>
                          <button className="applyCTA">Apply</button>
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
