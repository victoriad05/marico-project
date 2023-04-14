import React from 'react'
import twitter from '../../images/SM Logos/Twitter_logo.svg'
import youtube from '../../images/SM Logos/YouTube_logo.svg'
import wordpress from '../../images/SM Logos/Wordpress_logo.svg'
import substack from '../../images/SM Logos/Substack_logo.svg'
import medium from '../../images/SM Logos/Medium_logo.svg'
import spotify from '../../images/SM Logos/Spotify_logo.svg'
import anchor from '../../images/SM Logos/Anchor_logo.svg'
import applepodcast from '../../images/SM Logos/Podcast_logo.svg'
import instagram from '../../images/SM Logos/Instagram_logo.svg'
import linkedin from '../../images/SM Logos/Linkedin_logo.svg'
import facebook from '../../images/SM Logos/Facebook_logo.svg'
import { BlogContainer, BlogWrapper, BlogTitle, BlogInfo, BlogSources, SourceItem, ItemImg, ItemTitle, ItemText,ItemLabel } from './BlogElements'

const Blog = () => {
  return (
    <BlogContainer>
      <BlogWrapper>
        <BlogTitle>Content Sources</BlogTitle>
        <BlogInfo>Connect these sources to your Marico homepage.</BlogInfo>
        <BlogSources>
            <SourceItem>
               <ItemImg src={twitter}/>
               <ItemTitle>Twitter</ItemTitle> 
               <ItemText>Connect your Twitter feed to your Marico homepage.</ItemText>
            </SourceItem>
            <SourceItem>
               <ItemImg src={youtube}/>
               <ItemTitle>YouTube</ItemTitle> 
               <ItemText>Connect your YouTube feed to your Marico homepage.</ItemText>
            </SourceItem>
            <SourceItem>
               <ItemImg src={wordpress}/>
               <ItemTitle>WordPress</ItemTitle> 
               <ItemText>Connect your WordPress feed to your Marico homepage</ItemText>
            </SourceItem>
            <SourceItem>
               <ItemImg src={substack}/>
               <ItemTitle>Substrack</ItemTitle> 
               <ItemText>Connect your Substrack feed to your Marico homepage</ItemText>
            </SourceItem>
            <SourceItem>
               <ItemImg src={medium}/>
               <ItemTitle>Medium</ItemTitle> 
               <ItemText>Connect your Medium feed to your Marico homepage</ItemText>
            </SourceItem>
            <SourceItem>
               <ItemImg src={wordpress}/>
               <ItemTitle>RSS Feeds</ItemTitle> 
               <ItemText>Connect your RSS Feeds feed to your Marico homepage</ItemText>
               <ItemLabel>Coming Soon</ItemLabel>
            </SourceItem>
            <SourceItem>
               <ItemImg src={spotify}/>
               <ItemTitle>Spotify</ItemTitle> 
               <ItemText>Connect your Spotify feed to your Marico homepage</ItemText>
            </SourceItem>
            <SourceItem>
               <ItemImg src={anchor}/>
               <ItemTitle>Anchor</ItemTitle> 
               <ItemText>Connect your Anchor feed to your Marico homepage</ItemText>
            </SourceItem>
            <SourceItem>
               <ItemImg src={applepodcast}/>
               <ItemTitle>Apple Podcasts</ItemTitle> 
               <ItemText>Connect your Apple Podcasts feed to your Marico homepage</ItemText>
            </SourceItem>
            <SourceItem>
               <ItemImg src={instagram}/>
               <ItemTitle>Instagram</ItemTitle> 
               <ItemText>Connect your Instagram feed to your Marico homepage</ItemText>
               <ItemLabel>Coming Soon</ItemLabel>
            </SourceItem>
            <SourceItem>
               <ItemImg src={linkedin}/>
               <ItemTitle>Linkedin</ItemTitle> 
               <ItemText>Connect your Linkedin feed to your Marico homepage</ItemText>
               <ItemLabel>Coming Soon</ItemLabel>
            </SourceItem>
            <SourceItem>
               <ItemImg src={facebook}/>
               <ItemTitle>Facebook</ItemTitle> 
               <ItemText>Connect your Facebook feed to your Marico homepage</ItemText>
               <ItemLabel>Coming Soon</ItemLabel>
            </SourceItem>
        </BlogSources>
      </BlogWrapper>
    </BlogContainer>
  )
}

export default Blog
