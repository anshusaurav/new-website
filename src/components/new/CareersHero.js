import React from "react"
import "./CareersHero.scss"


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
  const {card} = props;
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
