import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We belive a good place to live can make your life better.
          </span>

          <Accordion
            className="accordion"
            allowZeroExpanded={true}
          >
            {data.map((item, i) => (
              <AccordionItem key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemState>
                    {({ expanded }) => (
                      <AccordionItemButton
                        className={`flexCenter accordionButton ${
                          expanded ? "expanded" : "collapsed"
                        }`}
                      >
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    )}
                  </AccordionItemState>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <span className="detail secondaryText">{item.detail}</span>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
