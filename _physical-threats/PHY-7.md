---
layout: threat
ThreatCategory: Physical Access
ID: PHY-7
Threat: Battery Damage from Overheating
ThreatDescription: "Mobile device batteries contain Lithium-ion batteries, which based on their design and chemical composition, will always produce some heat (and a combustible gas) during charging or expenditure of charge. They are, however, designed to dissipate some measure of these as they are generated. However, if a battery is damaged, defective, poorly designed, or misused, the battery has an increased chance to generate more heat over time than it can safely dissipate, which can lead to overheating. Overheating can break-down battery components and cause an effect called `thermal (or heat) runaway'. During this effect, the electrolytes in the battery undergo a chemical reaction that produces additional heat and gas, which perpetuates the effect. Eventually, the excess heat and gas will combust, which may deform the battery or even cause fire or explosion, potentially resulting in damage to other components of the device.\nMobile devices contain safeguards to prevent overheating. The mobile OS may turn off the device if the temperature becomes too great to stop generating additional heat in the CPU and other components. The battery controller will prevent excess current from entering the battery terminal (over-charging), which rapidly generates excess heat. However, overheating can still occur if the device is damaged, defective, or poorly designed. Additionally, as a device is recharged, and particularly if rapidly charged, Lithium ions may permeate the electrolyte separator and bond to the opposite terminal. If enough Litium bonds in this manner, a short-circuit occurs inside battery, which will greatly increase the risk of overheating."
ThreatOrigin: The science behind exploding phone batteries [^A-Chen-L-Goode-1]
ExploitExample:
CVEExample:
PossibleCountermeasures:
    Mobile Device User:
      - Allow a device that is very warm or hot to the touch cool before charging it.
      - Do not charge a device that is in a hot or heat-preserving environment, such as in direct sunlight, in a hot car, or under a blanket, as this will decrease the rate at which the device can dissipate heat.
      - Avoid the use of quick-charge chargers, which will increase the heat produced during charging operations. and will increase risk of causing the battery to overheat.
      - Charge a device using peripherals specifically designed for it, such as the charging unit and cable packaged with the device.
      - To lessen the amount of heat produced by the CPU during charging operations, place the device into sleep mode or turn it completely off while charging
      - To lessen the amount of heat produced by the battery during charging operations, charge the device from the USB port of a trusted computer.
      - If a device becomes hot while charging while asleep or off, take it to a authorized service center so a defective battery can be replaced before causing damage to the device.
title: PHY-7
rawID: 7
---
