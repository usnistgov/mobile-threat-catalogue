---
    layout: threat
    ThreatCategory: Physical Access
    ID: PHY-5
    Threat: "Battery damaged from overheating"
    ThreatDescription: "Mobile device batteries contain Lithium-ion batteries, which based on their design and chemical composition, will always produce some heat (and a combustible gas) during charging or expenditure of charge. They are, however, designed to dissipate some measure of these as they are generated. However, if a battery is damaged, defective, poorly designed, or misused, the battery has an increased chance to generate more heat over time than it can safely dissipate, which can lead to overheating. Overheating can break-down battery components and cause an effect called `heat runaway'. During this effect, the electrolytes in the battery undergo a chemical reaction that produces additional heat and gas, which perpetuates the effect. Eventually, the excess heat and gas will combust, which may deform the battery or even cause fire or explosion, potentially resulting in damage to other components of the device."
    ThreatOrigin: "The science behind exploding phone batteries [^A-Chen-L-Goode-1]"
    ExploitExample: 
        
    CVEExample:
    PossibleCountermeasures:
        "Allow a device that is very warm or hot to the touch cool before charging it.":
            - Mobile Device User
        "Do not charge a device that is in a hot or heat-preserving environment, such as in direct sunlight, in a hot car, or under a blanket, as this will decrease the rate at which the device can dissipate heat.":
            - Mobile Device User
        "Avoid the use of quick-charge chargers, which will increase the heat produced during charging operations. and will increase risk of causing the battery to overheat.":
            - Mobile Device User
        "Charge a device using peripherals specifically designed for it, such as the charging unit and cable packaged with the device.":
            - Mobile Device User
        "To lessen the amount of heat produced by the CPU during charging operations, place the device into sleep mode or turn it completely off while charging":
            - Mobile Device User
        "To lessen the amount of heat produced by the battery during charging operations, charge the device from the USB port of a trusted computer.":
            - Mobile Device User
        "If a device becomes hot while charging while asleep or off, take it to a authorized service center so a defective battery can be replaced before causing damage to the device.":
            - Mobile Device User
---
