import {
    AppPanelContainer,
    InfoContainer,
    Title,
    ReleaseDateContainer,
    ReleaseDate,
    Moon
} from './AppPanel.styles.js';

export default function AppPanel({ children, title, releaseDate, $singleLine=false }) {
  return (
    <AppPanelContainer $singleLine={$singleLine} >
      {!$singleLine ?
        <>
          { children }
          <InfoContainer>     
              <Title>{title}</Title>
              <ReleaseDateContainer>
                  <ReleaseDate>{releaseDate}</ReleaseDate>
                  <Moon />
              </ReleaseDateContainer>
          </InfoContainer>
        </>
        :
        <h3 style={{ color: "#1e1e1e" }}>{title}</h3>
      }
    </AppPanelContainer>
  )
}
