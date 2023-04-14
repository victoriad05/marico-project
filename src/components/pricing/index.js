import React from 'react'
import { PricingContainer,PricingWrapper, PricingTitle, PricingCards, Card, CardTitle, CardInfo, CardP, CardPrice1, CardPrice2, CardDesc, CardAdditional, FeaturesTitle, FeaturesInfo, Check, CardBtn } from './PricingElements'

const Pricing = () => {
  return (
    <PricingContainer>
      <PricingWrapper>
        <PricingTitle>Choose the plan that's right for you.</PricingTitle>
        <PricingCards>
            <Card>
              <CardInfo>
                <CardTitle>Starter</CardTitle>
                <CardP>Perfect for tying out Marico</CardP>
                <CardPrice1 className='first_card'>Free</CardPrice1>
                <CardDesc>Collect Unlimited subscribers<br/><span>500 monthly emails</span></CardDesc>
                <CardAdditional>Upgrade to send more emails</CardAdditional>
                <FeaturesTitle>Key features</FeaturesTitle>
                <FeaturesInfo><Check /> Automatic updating home page</FeaturesInfo>
                <FeaturesInfo><Check /> Unlimited sources + posts</FeaturesInfo>
              </CardInfo>
              <CardBtn>Start For Free</CardBtn>
            </Card>
            <Card>
                <CardInfo>
                    <CardTitle>Basic</CardTitle>
                    <CardP>Build your online home</CardP>
                    <CardPrice1>$14<span>Per month</span></CardPrice1>
                    <CardPrice2>or $19/mo, billed monthly</CardPrice2>
                    <CardDesc>Collect Unlimited subscribers<br/><span>2,000 free month email</span></CardDesc>
                    <CardAdditional>Purchase more for $0.002 per email</CardAdditional>
                    <FeaturesTitle>Everything in starter, plus</FeaturesTitle>
                    <FeaturesInfo><Check /> Remove Marico branding</FeaturesInfo>
                    <FeaturesInfo><Check /> Embed Marico on your own domain</FeaturesInfo>
                </CardInfo>
                <CardBtn>Start Free 14-day Trail</CardBtn>
            </Card>
            <Card className='blue'>
                <CardInfo>
                    <CardTitle>Complite</CardTitle>
                    <CardP className='blue'>Enhanced engagement</CardP>
                    <CardPrice1>$29<span className='blue'>Per month</span></CardPrice1>
                    <CardPrice2 className='blue'>or $34/mo, billed monthly</CardPrice2>
                    <CardDesc>Collect Unlimited subscribers<br/><span>10,000 free monthly emails</span></CardDesc>
                    <CardAdditional className='blue'>Purchase more for $0.002 per email</CardAdditional>
                    <FeaturesTitle>Everything in basic, plus</FeaturesTitle>
                    <FeaturesInfo><Check /> Collect text message subscribers</FeaturesInfo>
                    <FeaturesInfo><Check /> Share posts over text message</FeaturesInfo>
                </CardInfo>
                <CardBtn className='blue'>Start Free 14-day Trail</CardBtn>
            </Card>
        </PricingCards>
      </PricingWrapper>
    </PricingContainer>
  )
}

export default Pricing
