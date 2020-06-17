import React, {useState} from "react";
import * as Icon from "react-feather";
import FsLightbox from "fslightbox-react";

function Portfolio(props) {
  // const [toggler, setToggler] = useState(false);
  const {title, subtitle, imageUrl, largeImageUrl, url, gitHubLink, technologies, apis} = props.content;

  // const handleToggler = (value) => {
  //   setToggler(value);
  // }

  return (
    <div>
      <div className={props.isVisible ? "mi-portfolio mi-portfolio-visible" : "mi-portfolio"}>
        <div className="mi-portfolio-image">
          <img src={imageUrl} alt={title}/>
          <ul>
            <p>Front End</p>
            <p>{technologies}</p>
            <p>Back End</p>
            <div class='api-links'>
              {apis.map((api) => <a href={api} target='_blank' key={api}>{api}</a>)}
            </div>
          </ul>
        </div>
        {!url ? <h5>{title}</h5> : <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>}
        {subtitle ? <h6>{subtitle}</h6> : null}
        {!largeImageUrl ? null : <FsLightbox
          // toggler={toggler}
          sources={largeImageUrl}
        />
        }
      </div>
      <div className='portfolio-links'>
        <a rel="noopener noreferrer" target="_blank" href={url}>
          <Icon.Link/>
        </a>
        <a rel="noopener noreferrer" target="_blank" href={gitHubLink}>
          <Icon.GitHub/>
        </a>
      </div>
    </div>
  )
}

export default Portfolio;
