export const SITE = {
  name: "Weed Insurance Agency",
  domain: "weedinsuranceagency.com",
  url: "https://weedinsuranceagency.com",
  tagline: "Cannabis Business Insurance for Dispensaries, Growers & Processors",
  description: "Specialty insurance for cannabis businesses — dispensaries, cultivators, processors, and hemp brands. Most standard carriers decline cannabis. We shop the specialty markets that write it right. Licensed in all 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  statesLicensed: "All 50 states",
} as const;

export const SERVICES = [
  {
    slug: "dispensary-insurance",
    title: "Dispensary Insurance",
    short: "GL, product liability, crime/theft, property, workers comp, and cyber for cannabis retail operators of all license types.",
    icon: "Store",
    description:
      "Comprehensive insurance for cannabis dispensary and retail operations. Covers general liability required for state licensing, product liability for third-party claims from sold products, crime coverage for cash-heavy operations, and commercial property for high-value cannabis inventory.",
    longDescription: `## Cannabis Dispensary Insurance: The Complete Coverage Stack

Cannabis dispensaries face insurance challenges that no standard retail business encounters. Most major admitted carriers — The Hartford, Nationwide, State Farm, Travelers — will not write a cannabis retail operation regardless of state license status. Federal Schedule I classification makes standard market access impossible. That leaves dispensary operators needing specialty surplus and non-admitted market coverage: real, claims-paying policies, just from carriers that understand the cannabis risk profile.

CCA's cannabis specialty division accesses the markets that write dispensary coverage right: Amwins cannabis programs, Berkley One cannabis, Admiral Insurance cannabis division, and specialty cannabis MGAs including CannGen and Cover Cannabis.

## General Liability — The Policy Your License Requires

Most cannabis licensing states require proof of general liability insurance before issuing or renewing a dispensary license. California, Colorado, Illinois, Michigan, Arizona, Nevada, Washington, Oregon, Massachusetts, and New York all require GL as part of the licensing package.

What dispensary GL covers:
- Third-party bodily injury on your premises (customer slip and fall, visitor injury)
- Third-party property damage caused by your operations
- Personal and advertising injury (libel, slander, copyright infringement in marketing)
- Products and completed operations — liability for products you've sold

**Minimum GL limits** most states require: $1,000,000 per occurrence / $2,000,000 aggregate. Some states with newer programs require $2M/$4M. We issue certificates of insurance (ACORD 25) fast to meet licensing deadlines.

## Product Liability — Your Most Critical Coverage

If you sell a cannabis product — even one you didn't manufacture — and a customer has an adverse reaction, you will likely be named in any lawsuit. Product liability is the coverage that responds to these claims, and it is not automatically included in a standard GL policy.

What triggers dispensary product liability claims:
- Customer adverse reaction to an edible (dosing, allergy, unexpected interaction)
- Vape cartridge failure causing injury or fire
- Contaminated flower reaching a consumer (pesticide, mold, improper curing)
- Product labeling error (wrong THC content, undisclosed ingredients)
- Child accidental ingestion of improperly secured cannabis product

Products-completed operations coverage extends protection after the product leaves your store. The product you sold last Tuesday is still your liability exposure today.

## Crime Insurance — The Cash Problem Every Dispensary Has

Cannabis dispensaries operate in a predominantly cash economy. Most banks will not offer cannabis businesses standard merchant processing or business checking accounts. Federal banking regulations make cannabis deposits complicated or impossible at most institutions.

The result: dispensaries handle more cash per square foot than almost any other retail business. This cash is a target.

**What commercial crime insurance covers:**
- Employee dishonesty — internal theft of cash, inventory, or product by employees
- Robbery — armed theft from the premises or during transport
- Burglary — after-hours break-in and theft
- Safe burglary — theft from a locked safe
- Computer fraud — wire transfer fraud and business email compromise
- Messenger robbery — theft during cash transport

**What standard property insurance does NOT cover:** employee dishonesty and robbery are not covered under a standard commercial property policy. A crime policy is a separate, specific coverage for these perils. Without it, your most common theft scenarios are uninsured.

## Commercial Property — Protecting High-Value Cannabis Inventory

Cannabis inventory is uniquely high-value and high-theft-risk. A mid-size dispensary may carry $100,000–$500,000 in product at any time. Standard commercial property underwriters who decline cannabis leave this asset uninsured.

Specialty cannabis property coverage includes:
- Building and tenant improvements
- Cannabis inventory (valued separately — standard BPP limits may be inadequate)
- Display cases, point-of-sale equipment, security systems
- Leasehold improvements (build-out of your dispensary space)
- Business income and extra expense during covered interruption

## Workers Compensation

Most states require workers compensation from the first non-family employee. Dispensary WC exposure includes:
- Repetitive motion injury (packaging, register work)
- Slip and fall on dispensary floors
- Security incidents and robbery-related injury to staff
- Back injury (stocking, unloading)

Cannabis employer classification codes vary by state; specialty cannabis WC carriers understand the correct classification and do not apply improper surcharges.

## Cyber Liability

Cannabis dispensaries collect significant customer PII:
- Medical cannabis states: patient records, physician recommendations, medical IDs
- Adult-use states: government ID scans retained for age verification and compliance
- Loyalty program data, purchase history, email lists

A data breach triggers mandatory state notification laws in nearly every state. Cyber liability covers breach response costs, notification expense, credit monitoring, and third-party liability from the breach.

## State License Compliance Certificates

Most cannabis licensing bodies require a specific certificate format (ACORD 25) naming the state licensing agency as additional insured, or listing specific minimum limits. We understand these requirements and issue compliant certificates the same day in most cases.`,
    coverages: [
      "General Liability (state licensing requirement)",
      "Cannabis Product Liability",
      "Commercial Crime (employee dishonesty, robbery, burglary)",
      "Commercial Property (inventory, tenant improvements)",
      "Workers Compensation",
      "Cyber Liability (PII, patient records)",
      "Commercial Auto (delivery, company vehicles)",
      "State License Compliance Certificates",
    ],
    faqs: [
      { q: "What insurance does a cannabis dispensary legally need?", a: "Most cannabis licensing states require at minimum general liability insurance ($1M/$2M) before issuing or renewing a license. California, Colorado, Illinois, Michigan, Arizona, Nevada, Washington, Oregon, Massachusetts, and New York all require GL. Many states also require workers compensation once you have any non-family employees. Product liability, crime insurance, and commercial property are not typically state-mandated but are essential for operating a financially protected business." },
      { q: "How much does dispensary insurance cost?", a: "Dispensary general liability runs approximately $3,500–$7,000/year for a single-location operation. Adding product liability, crime, property, and workers comp typically brings a full coverage stack to $12,000–$25,000+ per year depending on location, revenue, inventory value, and claims history. Multi-location operators pay more but often qualify for blanket policies with economies of scale." },
      { q: "Does dispensary insurance cover product sold by another brand?", a: "Product liability covers you as a retailer for claims arising from products you sell — even products manufactured by another company. You are in the distribution chain, and plaintiffs routinely name every entity in that chain. Your product liability policy responds to defense costs and damages regardless of whether you manufactured the product." },
      { q: "What is cannabis product liability and why does a retailer need it?", a: "Product liability covers bodily injury and property damage claims arising from a product you sold. For cannabis retailers, this means a customer who claims an adverse reaction to an edible, a vape cartridge failure causing injury, or contaminated flower purchased at your store. Even if you are not at fault, you will likely be named in a lawsuit. Defense costs alone can be significant without product liability coverage." },
      { q: "Does a dispensary's GL policy cover delivery drivers?", a: "Standard GL covers your operations but not auto liability for delivery vehicles. If you offer delivery, you need either a commercial auto policy covering the delivery vehicle and driver, or a hired/non-owned auto endorsement on your GL if drivers use personal vehicles. Delivery operations also have a hired driver exclusion to watch for — confirm coverage with your agent before starting delivery operations." },
      { q: "How do I get proof of insurance for my state license application?", a: "We issue ACORD 25 certificates of insurance within hours of binding coverage. We understand state-specific certificate requirements — many states require the state licensing agency to be listed as additional insured, specific minimum limits, and specific policy language. We produce compliant certificates that meet the licensing body's exact requirements." },
      { q: "Can I get cyber liability insurance for a cannabis dispensary?", a: "Yes. Cyber liability is available for cannabis dispensaries through specialty surplus markets. Given that dispensaries collect government IDs (adult-use) or medical records (medical cannabis), they are subject to state data breach notification laws. A breach requires notification, credit monitoring services, and possibly regulatory defense. Cyber liability covers all of this." },
      { q: "Does commercial property cover cannabis inventory?", a: "Standard commercial property policies from admitted carriers typically exclude cannabis property. Specialty cannabis commercial property policies through surplus markets explicitly cover cannabis inventory, including the product in display cases, in the vault, and in the back-of-house storage. Inventory should be scheduled at current wholesale cost-to-replace, as cannabis products do not depreciate in the traditional sense." },
      { q: "What if my cash is stolen from a dispensary safe?", a: "Safe burglary — theft from a locked safe — is covered under commercial crime insurance, not standard commercial property. This is a critical distinction. Property covers fire, wind, and similar perils. Crime covers theft, robbery, and burglary. If your dispensary runs cash operations (as virtually all dispensaries do), a crime policy is essential, not optional." },
      { q: "Does workers comp cover dispensary employees?", a: "Yes. Workers compensation covers all non-exempt employees including dispensary staff. Coverage applies to occupational injuries: slip and fall, repetitive motion from packaging work, injury during a robbery or security incident. Most states require WC from the first employee. Cannabis employers may face surcharges from non-specialty carriers who misclassify the risk — we place coverage with carriers experienced in cannabis WC classification." },
      { q: "What carriers write dispensary insurance?", a: "The primary specialty cannabis insurance markets include Amwins cannabis program (through surplus brokers), Berkley One cannabis division, Admiral Insurance cannabis program, CannGen, Cover Cannabis, and OG Cannabis Insurance. These are surplus and non-admitted carriers. They are real, claims-paying insurers — they simply operate outside the admitted market because federal cannabis status prevents standard market participation." },
      { q: "Is dispensary insurance more expensive than regular retail insurance?", a: "Yes, meaningfully more. A standard retail GL policy might run $800–$2,500/year. Dispensary GL typically runs $3,500–$7,000+ for the same limits. The surplus market pricing reflects the higher perceived risk (federal illegality, cash operations, theft exposure) and the limited carrier competition. As more carriers enter the cannabis space, pricing has moderated — but cannabis remains a specialty market premium above standard retail." },
      { q: "Can I get dispensary insurance if I have a medical-only license?", a: "Yes. Medical dispensary licenses are insurable on the same policy types as adult-use. Some carriers actually prefer medical-only operations due to the compliance and patient-care orientation of medical cannabis programs. Your license type (medical, adult-use, dual-use) affects underwriting information but does not prevent access to coverage." },
      { q: "Does my policy cover losses from a regulatory raid or seizure?", a: "No. Regulatory seizure, government confiscation, and losses arising from criminal proceedings are excluded from standard property and crime policies. If state or federal authorities seize your inventory or close your operation, your insurance policy will not pay for that loss. Proper licensing compliance is your protection against regulatory action." },
      { q: "What happens to my insurance if I add a delivery component?", a: "Adding delivery operations materially changes your risk profile. You need to notify your carrier and add appropriate auto coverage (commercial auto for company-owned delivery vehicles, or hired/non-owned auto for driver personal vehicles). Some cannabis GL policies have specific delivery endorsements. Operating delivery without proper auto coverage creates an uninsured gap — delivery drivers using personal vehicles with only personal auto policies are typically not covered for commercial delivery incidents." },
      { q: "Does GL cover a customer claiming an adverse reaction to edibles?", a: "A products liability claim from edible consumption is covered under the products and completed operations section of your GL — IF your policy includes products coverage and does not have a specific cannabis products exclusion. This is why specialty cannabis carriers matter. A standard GL from a non-cannabis carrier might have a cannabis products exclusion that voids the claim entirely. Specialty cannabis policies are specifically written to cover cannabis product claims." },
      { q: "Can I add a second location to my dispensary policy?", a: "Yes. Multi-location dispensary operations can be added to existing policies via endorsement or covered under a blanket policy. New location underwriting typically requires the same information as the original application: location address, square footage, security measures, and revenue. Notify your carrier before opening a new location — unreported locations may be uninsured." },
      { q: "Does dispensary insurance cover employee theft of inventory?", a: "Employee dishonesty — including theft of cannabis inventory by employees — is covered under commercial crime insurance, NOT under a standard GL or property policy. Employee theft of product is a significant exposure for dispensaries given the portability and value of cannabis inventory. A crime policy is the correct solution." },
      { q: "How quickly can I get a certificate of insurance for licensing?", a: "Once coverage is bound, we issue ACORD 25 certificates the same day, in most cases within hours. For licensing applications with imminent deadlines, we can often expedite the binding process if your application is complete. The limiting factor is rarely our speed — it's the completeness of the underwriting submission." },
      { q: "What is the minimum GL limit for most state cannabis licenses?", a: "$1,000,000 per occurrence and $2,000,000 general aggregate is the most common minimum required by state cannabis licensing bodies. Some states and some license types require higher limits. California's Bureau of Cannabis Control, for example, requires specific minimum limits for each license type. We know the current requirements for all legal cannabis states." },
      { q: "Does my policy cover losses from a data breach?", a: "Standard GL, property, and crime policies do not cover cyber incidents or data breaches. A separate cyber liability policy is needed. Given the PII dispensaries collect — especially medical cannabis records in medical states — cyber coverage is an important component of a complete dispensary insurance program." },
    ],
  },
  {
    slug: "cannabis-cultivator-insurance",
    title: "Cannabis Cultivator Insurance",
    short: "Crop coverage from seed to harvest, GL, property, equipment breakdown, and WC for indoor, outdoor, and greenhouse cannabis grows.",
    icon: "Leaf",
    description:
      "Specialty insurance for cannabis cultivators and growers. Cannabis cannot be covered under USDA federal crop programs — specialty surplus markets provide stage-based crop coverage, property for grow facilities and equipment, equipment breakdown for HVAC systems, and workers compensation for cultivation employees.",
    longDescription: `## Cannabis Cultivator Insurance: Protecting Your Grow Operation

Cannabis cultivation has a fundamental insurance problem that no other agricultural sector faces: the federal government's Schedule I classification makes cannabis ineligible for USDA Federal Crop Insurance Corporation (FCIC) programs. There is no FSA disaster assistance. There are no USDA emergency programs.

Cannabis cultivators operate without the federal safety net that protects corn, soy, wheat, and even hemp. When a HVAC failure wipes out a flower crop, when thieves steal live plants, when a pest outbreak decimates a harvest — cannabis cultivators can only recover through specialty private market insurance.

## Cannabis Crop Insurance: The Critical Coverage

Standard commercial property insurance covers buildings and equipment from external perils: fire, wind, lightning. It does not cover a cannabis crop. Plants growing in your facility are agricultural commodities, and commercial property policies are not designed to value or insure them.

Specialty cannabis crop insurance covers the plant material itself through its growth stages:

**Stage-based valuation:**
- Seed/clone stage: replacement cost of genetics (clones can represent significant investment in elite genetics)
- Vegetative stage: accumulated investment in growing medium, nutrients, labor, and facility overhead
- Pre-harvest/flowering stage: highest value — the expected yield value of mature flower
- Post-harvest: harvested and drying/curing flower

**What triggers crop loss coverage:**
- Fire or explosion in the grow facility
- HVAC system failure causing temperature/humidity extremes (during flowering = total crop loss)
- Theft of live plants from the facility
- Pest infestation or disease — available with select carriers as a named peril
- CO2 system failure causing plant stress
- Water damage from irrigation system failure or flooding

The coverage limit should reflect the value of crop in each growth stage across all rooms. A facility with 10 flowering rooms at $50,000 of crop value each needs $500,000 in crop coverage minimum.

## General Liability for Cannabis Cultivators

Cultivator GL covers:
- Third-party bodily injury at your facility — contractors, vendors, compliance inspectors injured on site
- Property damage to neighboring properties (odor migration, water runoff, light pollution claims)
- Products and completed operations — your liability as part of the cannabis supply chain when products are traced back to your crop

Most cannabis licensing states require cultivators to maintain GL insurance as a condition of license issuance and renewal. Minimum limits typically match dispensary requirements: $1M/$2M.

## Commercial Property: Grow Facility and Equipment

Cannabis cultivation facilities contain significant property investment:

**Building and tenant improvements:** A converted warehouse buildout for cannabis cultivation involves specialized electrical (high-amperage grow lighting circuits), specialized HVAC, automated irrigation, concrete floors with drains, insulated walls, and security systems. Replacement cost is substantially higher than standard warehouse space.

**Equipment covered:**
- HVAC and environmental control systems (often the most expensive single equipment category)
- LED grow lighting systems
- Irrigation and fertigation systems
- Processing and trimming equipment
- Security systems and cameras
- Forklifts and material handling equipment

## Equipment Breakdown Insurance

HVAC failure during the flowering stage is the single most catastrophic operational risk for indoor cannabis cultivators. A properly built flowering room maintains 65–80°F with 40–55% relative humidity. If the HVAC system fails and temperatures spike to 95°F for 48 hours, the entire room's crop can be lost to heat stress, mold, or accelerated maturation.

Standard commercial property insurance covers the HVAC unit if it's damaged by fire, lightning, or a fallen tree. It does not cover mechanical or electrical failure of the equipment itself — a compressor seizing, a control board failing, a refrigerant leak developing.

Equipment breakdown insurance fills this gap: it covers the repair or replacement of covered equipment plus the resulting income loss while the equipment is out of service. For a cannabis cultivator, the equipment breakdown income loss component often exceeds the equipment repair cost.

## Workers Compensation for Cultivation Employees

Cannabis cultivation involves real workplace hazards:

**Chemical exposure:** Pesticides, fungicides, CO2 systems, cleaning chemicals, and processing solvents create chemical exposure risk for cultivation employees. Proper PPE programs reduce exposure but do not eliminate the WC risk.

**Physical hazards:** Working on ladders in tall canopy grows, heavy lifting of growing media and containers, operating forklifts and material handling equipment.

**Repetitive motion:** Trimming and processing work generates repetitive motion injuries (carpal tunnel, shoulder impingement) among trim workers.

Cannabis cultivation WC is properly classified under agricultural codes with specialty cannabis endorsements. We access carriers who understand cultivation operations and apply correct classification — not the higher commercial building rates sometimes applied to cannabis operations by uninformed underwriters.`,
    coverages: [
      "Cannabis Crop Insurance (seed-to-harvest)",
      "General Liability",
      "Commercial Property (grow facility, equipment)",
      "Equipment Breakdown (HVAC, lighting systems)",
      "Workers Compensation",
      "Business Interruption",
      "Product Liability (supply chain)",
      "Theft of Live Plants",
    ],
    faqs: [
      { q: "Can cannabis be covered by USDA crop insurance?", a: "No. Cannabis (THC-bearing) remains federally classified as a Schedule I controlled substance and is ineligible for USDA Federal Crop Insurance Corporation (FCIC) programs. There is no FSA disaster assistance for cannabis crop losses. Cannabis cultivators must rely entirely on specialty private market insurance for crop protection. This is a fundamental difference between cannabis cultivation and all other agricultural sectors." },
      { q: "What does cannabis crop insurance actually cover?", a: "Specialty cannabis crop insurance covers the plant material itself from named perils including fire, theft, HVAC failure, vandalism, and sometimes pest/disease (carrier-dependent). Coverage is stage-based: clones, vegetative, pre-harvest flowering, and post-harvest. The policy pays the value of the crop at the stage it was at when the loss occurred, based on the agreed yield value established at policy inception." },
      { q: "Does standard commercial property cover my cannabis plants?", a: "No. Standard commercial property insurance covers buildings and equipment from external perils (fire, wind, lightning, etc.). Plants growing in your facility are agricultural commodities, not business personal property in the traditional sense. They require a separate crop insurance endorsement or policy. Even cannabis-specific property policies may not automatically include crop coverage — it must be specifically requested and underwritten." },
      { q: "What HVAC failure does equipment breakdown cover?", a: "Equipment breakdown covers mechanical and electrical failure of the HVAC system itself — compressor seizure, control board failure, refrigerant system leak, blower motor failure. It does NOT cover damage to the HVAC unit from external perils like fire or flood (those fall under commercial property). For cannabis cultivators, the more important component is often the resulting crop loss from the HVAC failure, which equipment breakdown with business interruption covers." },
      { q: "Does cultivator insurance cover theft of live cannabis plants?", a: "Yes — theft of live plants is a coverable peril under specialty cannabis crop insurance policies. This includes both armed robbery and burglary of plant material from the grow facility. Security requirements apply: most policies require alarm systems, surveillance cameras, secured perimeter, and access control. Meeting security requirements also tends to reduce the theft probability and the premium." },
      { q: "What workers comp codes apply to cannabis cultivation employees?", a: "Cannabis cultivation employees are typically classified under agricultural or greenhouse/nursery codes depending on the state and the nature of operations. Common classifications include NCCI Code 0171 (Farm — nursery employees) or state-specific greenhouse codes. Trim workers may be classified separately. Correct classification matters significantly for WC premiums — misclassification by uninformed carriers can result in substantially higher rates or coverage disputes at audit." },
      { q: "Does cultivator GL cover odor complaints from neighbors?", a: "Cannabis odor migration to neighboring properties that causes documented harm — restaurant claiming cannabis smell is affecting their business, neighbor claiming diminished property value — could trigger a nuisance or trespass claim that might fall under GL bodily injury/property damage sections. However, odor as a pollutant may trigger the GL pollution exclusion. Contractors pollution liability (CPL) specifically addresses claims arising from chemical or odor releases. Discuss your specific situation with your agent." },
    ],
  },
  {
    slug: "cannabis-processor-insurance",
    title: "Processor & Extractor Insurance",
    short: "Product liability, pollution liability for solvents, property for extraction equipment, and WC for MIP operations and extractors.",
    icon: "FlaskConical",
    description:
      "Specialty insurance for cannabis processors, extractors, and infused product manufacturers. The highest product liability exposure in the cannabis supply chain — edibles, concentrates, and vape cartridges. Pollution liability for hydrocarbon and ethanol solvents. Equipment coverage for high-value extraction systems.",
    longDescription: `## Cannabis Processor & Extractor Insurance: The Highest-Risk Segment

Cannabis processors, extractors, and infused product manufacturers (MIPs) occupy the most complex insurance position in the cannabis supply chain. You face product liability exposure from the finished products you create, pollution liability from the solvents and chemicals you use, equipment breakdown risk from extremely high-value extraction equipment, and workers compensation for employees working with hazardous materials.

Most cannabis processors who think they have adequate insurance discover the gaps when they need to file a claim.

## Product Liability: Your Highest Exposure

Cannabis processors and MIP manufacturers face the highest product liability risk in the cannabis industry. You are the business that determines:
- Dosing consistency in edibles (is the 10mg gummy actually 10mg — or 80mg?)
- Purity of concentrates (residual solvents, contaminants from the extraction process)
- Quality control on vape cartridges (ingredients, fill levels, hardware integrity)
- Formulation safety of topicals, tinctures, and beverages

**Trigger events for processor product liability claims:**
- Edible with inconsistent dosing causes accidental overconsumption
- Vape cartridge failure — hardware issue, leaking, overheating causing burns
- Residual solvent contamination in concentrates causing illness
- Mold or pesticide contamination not caught in QC passing into finished product
- Child accessing a product and being harmed
- Product labeled as CBD-only testing positive for THC

Products-completed operations coverage is especially critical for processors — your liability continues after the product leaves your facility, travels through distribution, sits on a dispensary shelf, and is consumed by a customer months later.

**Recall coverage:** A voluntary or mandatory product recall is a covered event under cannabis product liability with recall endorsement. Costs include product recovery, third-party testing, disposal, and notification — which can be substantial for a multi-batch recall.

## Pollution Liability for Extraction Operations

Standard GL policies contain a pollution exclusion. For most businesses, this exclusion is largely theoretical. For cannabis extractors, it is highly relevant and potentially catastrophic.

**Hydrocarbon extraction (BHO, propane, butane):** These operations use flammable, explosive solvents in a closed-loop system. Even a properly operating closed-loop system involves a pollution exposure — solvent vapors, purging operations, spill containment. A release from a faulty fitting, an operator error, or an equipment failure can cause:
- Explosion and fire (covered by property, but the pollution claims from injured neighbors are not)
- Vapor exposure to adjacent tenants or neighboring businesses
- Soil or drain contamination from a solvent spill

**Ethanol extraction:** Large-volume ethanol (Class IB flammable liquid) presents fire and vapor exposure. Ethanol storage and handling requires specific code compliance; violations can trigger environmental agency response.

**CO2 extraction:** Lower hazard solvent-wise, but CO2 asphyxiation risk in an enclosed space is a genuine safety hazard.

Pollution liability (also called Contractors Pollution Liability or Environmental Liability in this context) covers bodily injury and property damage from pollution releases that GL explicitly excludes.

## High-Value Extraction Equipment

Cannabis extraction equipment represents major capital investment:
- CO2 extraction systems: $50,000–$500,000+
- Hydrocarbon closed-loop systems: $20,000–$150,000
- Ethanol extraction equipment: $30,000–$200,000+
- Rotary evaporators, falling film evaporators, short-path distillation: $10,000–$80,000 each
- Post-processing equipment (winterization, filtration, decarboxylation ovens)

Standard commercial property covers this equipment from external perils (fire, theft, etc.). Equipment breakdown covers mechanical and electrical failure — compressor failure on a CO2 machine, heating element failure, pressure vessel malfunction. For processors operating expensive extraction equipment, equipment breakdown is not optional.

## Workers Compensation: Chemical Exposure Priority

Processor WC exposure is dominated by chemical exposure risks:
- Solvent inhalation from hydrocarbon or ethanol extraction
- CO2 asphyxiation risk in enclosed extraction spaces
- Burns from hot surfaces or equipment
- Lab chemical exposure during post-processing
- Repetitive motion from trimming/processing work

Proper PPE programs, ventilation system documentation, and safety training records materially affect WC underwriting. We help processors document safety programs to qualify for better WC terms.`,
    coverages: [
      "Cannabis Product Liability (edibles, concentrates, vape)",
      "Product Recall Coverage",
      "Pollution/Environmental Liability (solvents, vapors)",
      "Commercial Property (extraction equipment)",
      "Equipment Breakdown",
      "General Liability",
      "Workers Compensation (chemical exposure)",
      "Commercial Crime (high-value finished product)",
    ],
    faqs: [
      { q: "Why do cannabis processors have the highest product liability exposure?", a: "Processors determine the dosing, purity, and formulation of cannabis products — and those decisions become liability exposure when a product causes harm. An edible manufacturer who misformulates a batch at 10x intended dosing, an extractor whose concentrate contains residual solvents, a vape cartridge manufacturer whose hardware fails and causes burns — these are all processor-origin claims. The processor is the origin point of the product that harmed the consumer, which is why processors face the highest product liability risk in the cannabis supply chain." },
      { q: "Does my GL cover a claim from solvent fumes injuring a neighboring tenant?", a: "Almost certainly not. Standard GL policies contain a pollution exclusion that treats chemical fumes, vapors, and solvents as pollutants. A claim from an adjacent tenant claiming respiratory injury from your extraction operation's solvent vapors will be denied under GL. Pollution liability (environmental liability) specifically fills this gap — it covers bodily injury and property damage from pollution releases that GL excludes. This is essential coverage for any extraction operation." },
      { q: "What does product recall coverage pay?", a: "Product recall coverage pays the costs of executing a product recall: notifying distributors and dispensaries, logistics of product retrieval, third-party testing of recalled product, safe disposal of the recalled inventory, and regulatory response costs. A multi-batch recall across multiple states can cost $50,000–$200,000+ in recall execution expenses even before any liability claims from harmed consumers." },
      { q: "Does equipment breakdown cover my CO2 extractor?", a: "Yes. Equipment breakdown covers mechanical and electrical failure of covered extraction equipment — CO2 machine compressor failure, heating/cooling system failure, pressure vessel malfunction. It does not cover damage from fire, explosion, or theft (those fall under property). For processors with extraction equipment valued at $100,000+, equipment breakdown is a critical coverage that bridges the gap standard property leaves." },
      { q: "Are vape cartridge manufacturers insurable?", a: "Yes, but with careful underwriting. Vape cartridge manufacturers face heightened scrutiny since the 2019-2020 EVALI outbreak (Vitamin E acetate-linked vaping illness). Carriers want to know: hardware sourcing, fill process, ingredients (no Vitamin E acetate), testing protocols, and QC documentation. Properly documented vape operations with third-party lab testing on every batch are insurable through specialty cannabis markets." },
    ],
  },
  {
    slug: "hemp-cbd-insurance",
    title: "Hemp & CBD Insurance",
    short: "Product liability, crop coverage, and e-commerce insurance for hemp brands and CBD operators — more market access than THC, still specialty needs.",
    icon: "Sprout",
    description:
      "Hemp and CBD businesses have broader insurance market access than THC operations — but still need specialty coverage for product liability on edibles and topicals, crop insurance with hot-crop protection, and e-commerce liability for online CBD sales across state lines.",
    longDescription: `## Hemp & CBD Business Insurance: More Options, Still Specialty Needs

The 2018 Farm Bill's federal legalization of hemp (cannabis with ≤0.3% THC by dry weight) fundamentally changed the insurance landscape for hemp operators. Unlike THC cannabis, hemp is now a legal agricultural commodity under federal law — which opens access to some admitted carriers, USDA crop programs, and standard business insurance markets that remain unavailable to THC operators.

But "more options" does not mean "any carrier will do." Hemp and CBD businesses still need specialty coverage for their unique exposures, and the standard market often misunderstands or undervalues hemp-specific risks.

## The Hemp vs. THC Insurance Difference

**What hemp legalization changed:**
- Access to USDA Federal Crop Insurance programs (WFRP — Whole Farm Revenue Protection)
- Some admitted carrier appetite for hemp property and GL
- Standard business banking (most hemp businesses can access standard merchant services)
- Reduced regulatory risk compared to THC cannabis

**What it didn't change:**
- Product liability exposure for CBD products (FDA has not approved CBD as a food additive; mislabeling and adverse reaction claims are real)
- Hot crop destruction risk (crop testing above 0.3% THC must be destroyed)
- State-to-state regulatory variation
- Standard carrier reluctance to write hemp edibles and CBD products specifically

## Product Liability for CBD Products: Still Critical

CBD products present genuine product liability exposure that standard admitted carriers often won't write — or write with exclusions that gut the coverage:

**Edibles and beverages:** The FDA has not approved CBD as a food additive. CBD edibles operate in a regulatory gray zone. A claim alleging mislabeling (product contains more THC than stated), adverse health reaction, or contamination (heavy metals, pesticides) can target any business in the CBD supply chain.

**Tinctures and oils:** Dosing accuracy, ingredient disclosure, third-party lab testing documentation all affect both product quality and liability exposure.

**Topicals:** Lower ingestion risk, but allergen claims and contamination claims still occur.

**Pet products:** A fast-growing CBD segment with heightened liability exposure — animal adverse reactions and owner claims for veterinary costs.

## Hemp Crop Insurance: USDA Programs + Private Supplement

**USDA Whole Farm Revenue Protection (WFRP):** Available to hemp producers under specific conditions. Covers revenue loss from multiple commodities on the farm; hemp is included as of USDA 2021 updates. Requires extensive financial records and farm history.

**Private market hemp crop insurance:** Supplements USDA programs or provides standalone coverage for hemp producers who don't qualify for WFRP. Stage-based valuation (transplant → vegetative → pre-harvest → harvest). Also covers varieties that are not covered under WFRP or during gaps in USDA program availability.

**The Hot Crop Risk:** This is the most specific hemp production risk with no parallel in standard agriculture. If your hemp crop tests above 0.3% THC at or near harvest, it cannot be sold, transported, or processed — it must be destroyed under state oversight. Some hemp crops go "hot" due to genetics, stress, or environmental factors despite a compliant starting variety. Hot crop coverage pays the value of destroyed above-limit hemp biomass.

## E-Commerce and Online CBD Sales

Many CBD brands operate primarily online — shipping direct-to-consumer nationally or internationally. This creates specific exposures:

**Product liability across state lines:** Your product is now consumed by customers in 50 states, each with different consumer protection laws and CBD regulations.

**State CBD regulations:** Some states have specific restrictions on CBD in food products, topicals, or pet products. Selling into a restricted state creates regulatory and liability exposure.

**Cyber liability:** E-commerce operations collect customer PII, payment card data, and shipping information. A data breach triggers notification laws in every state where affected customers reside.

**General liability for e-commerce:** Physical operations (warehouse, office) still need standard GL even for online-focused brands.

## What Hemp Businesses Still Can't Easily Get

Despite broader market access, some hemp-specific products remain difficult to insure through standard carriers:
- CBD edibles and infused beverages (most admitted carriers still exclude)
- Hemp extract operations with solvent-based processing
- High-THC remediation operations (converting hot crop to compliant material)
- Multi-state hemp distributors with complex interstate commerce exposure

CCA accesses both admitted and specialty surplus markets to build complete hemp business coverage programs.`,
    coverages: [
      "CBD Product Liability",
      "Hemp Crop Insurance (including Hot Crop coverage)",
      "General Liability",
      "Commercial Property",
      "Cyber Liability (e-commerce)",
      "Commercial Auto",
      "Workers Compensation",
      "USDA WFRP Program Guidance",
    ],
    faqs: [
      { q: "Does the 2018 Farm Bill mean hemp businesses can get standard insurance?", a: "Partially. Federal hemp legalization opened access to some standard markets for hemp property, GL, and business operations. However, CBD-specific product liability — especially for edibles, tinctures, and pet products — is still specialty territory. Most admitted carriers either exclude CBD products specifically or have coverage language that creates gaps for CBD-specific claims. A complete hemp insurance program often combines standard market products for some coverages with specialty surplus products for CBD product liability." },
      { q: "What is the hot crop risk for hemp producers?", a: "Hemp is legally defined as cannabis with ≤0.3% THC by dry weight under the 2018 Farm Bill. If a hemp crop tests above this threshold at pre-harvest or harvest testing, it must be destroyed under state agricultural authority oversight — it cannot be sold, transported, or processed. This can happen to compliant-starting genetics due to stress, heat, or improper harvest timing. Hot crop insurance specifically covers the value of destroyed above-limit hemp biomass." },
      { q: "Does standard business insurance cover CBD product claims?", a: "Typically not. Standard GL and product liability policies from admitted carriers often contain exclusions for CBD products, cannabis-derived products, or products not approved by the FDA as food additives. A standard policy from a mainstream carrier might cover your general operations but leave CBD product claims excluded. Specialty surplus market product liability is the appropriate solution for CBD brands." },
      { q: "Can hemp businesses get USDA crop insurance?", a: "Yes — hemp producers can access USDA Whole Farm Revenue Protection (WFRP) under certain conditions, as hemp was incorporated into eligible commodities in USDA updates since the 2018 Farm Bill. However, WFRP has documentation requirements (5 years of farm tax records, Schedule F) and revenue limits that not all hemp producers meet. Private market hemp crop insurance supplements WFRP or provides standalone coverage for operations that don't qualify." },
    ],
  },
  {
    slug: "cannabis-product-liability-insurance",
    title: "Product Liability Insurance",
    short: "Cannabis product liability for every business in the supply chain — cultivators, processors, distributors, and dispensaries.",
    icon: "Shield",
    description:
      "Cannabis product liability is the most critical policy in the industry. Every business in the supply chain — from cultivator to dispensary — can be named in a lawsuit arising from a cannabis product. This coverage pays defense costs and damages when claims are made against your business.",
    longDescription: `## Cannabis Product Liability: Why Every Business in the Chain Needs It

Cannabis product liability is not just for manufacturers. It is for every business that touches the product before it reaches the consumer: growers, processors, distributors, and retailers. In a product liability lawsuit, plaintiffs typically name every entity in the distribution chain — because any one of them might be liable, and naming them all ensures the recovery.

If you are in the cannabis supply chain in any capacity, you face product liability exposure.

## What Triggers Cannabis Product Liability Claims

**Edible adverse reactions:** Cannabis edibles — gummies, chocolates, beverages, baked goods — are the highest-risk product category. Dosing consistency is difficult to achieve at production scale. A batch that should contain 10mg THC per serving may contain 5mg or 100mg. Overconsumption, especially by new or inexperienced users, leads to medical treatment and claims.

**Vape cartridge failures:** Vape hardware failure — leaking, overheating, hardware malfunction — can cause burns, inhalation injury, and fires. The 2019 EVALI outbreak (associated with Vitamin E acetate-adulterated cartridges) demonstrated the scale of liability exposure in the vape segment.

**Contaminated flower or concentrate:** Pesticide residue above legal limits, mold (botrytis, powdery mildew) not caught in testing, heavy metals from soil or water, residual solvents in concentrates — all can cause consumer harm and generate claims.

**Child ingestion:** Cannabis packaging that attracts children, or improperly secured cannabis products accessible to children, generate some of the most serious cannabis product liability claims.

**Mislabeling:** CBD-labeled products containing THC, inaccurate potency on labels, undisclosed ingredients — all create both regulatory violation exposure and civil liability.

## Products-Completed Operations: Coverage After the Sale

Products and completed operations coverage is the component of product liability that extends beyond the transaction. It covers claims that arise after the product has left your possession — after the sale, after distribution, after the customer has taken it home.

This is where most cannabis product liability claims originate. The product leaves your facility, travels through distribution, sits on a dispensary shelf, and is consumed days, weeks, or months later. The claim that results traces back to your operation.

Products-completed operations coverage must be specifically included in your policy — confirm it is not excluded.

## Who Gets Sued: The Whole Chain

A plaintiff who is harmed by a cannabis product rarely knows who is at fault — the cultivator who grew the flower, the processor who made the edible, the distributor who shipped it, or the dispensary who sold it. Plaintiffs' attorneys name everyone.

What this means for each business type:
- **Cultivators:** Named when contaminated flower or improperly cured product leads to consumer harm
- **Processors:** Named when dosing errors, formulation problems, or manufacturing defects cause injury
- **Distributors:** Named when they transported and distributed a defective product
- **Dispensaries:** Named when they sold the product to the consumer

Even if you are ultimately determined not to be at fault, you must defend yourself. Defense costs in a product liability lawsuit easily reach $50,000–$200,000 before a verdict. Without product liability insurance, those costs come from your business.

## Product Recall Coverage

A voluntary or mandatory cannabis product recall is a covered event under product liability policies with recall endorsement. Recall coverage pays:
- Notification costs (notifying distributors, dispensaries, consumers)
- Product retrieval logistics
- Third-party testing of suspect product
- Disposal costs for recalled product
- Business income loss during the recall period
- Regulatory response costs

A single multi-batch recall affecting multiple dispensaries across a state can generate $100,000+ in recall expenses before any consumer liability claims are resolved.

## Cost Factors

Cannabis product liability pricing varies significantly by:
- **Product type:** Edibles and vape cartridges command the highest rates. Flower and topicals are lower. Concentrates are middle-tier.
- **Revenue:** Larger operations with more product in the market pay more.
- **Distribution territory:** Multi-state distribution expands exposure.
- **Claims history:** Prior product liability claims significantly affect pricing.
- **Testing protocols:** Documented third-party COA (Certificate of Analysis) requirements for every batch materially improve underwriting terms.`,
    coverages: [
      "Products and Completed Operations",
      "Product Recall Expense",
      "Defense Costs Coverage",
      "Third-Party Bodily Injury from Products",
      "Third-Party Property Damage from Products",
      "Mislabeling and Dosing Claims",
      "Child Ingestion Claims",
      "Multi-State Distribution Coverage",
    ],
    faqs: [
      { q: "Does a dispensary need product liability even if they didn't make the product?", a: "Yes. Dispensaries are in the product distribution chain and will be named in product liability lawsuits even for products manufactured by others. The plaintiff doesn't know who was at fault — their attorney names everyone in the chain to preserve options. A dispensary's product liability coverage pays defense costs and any judgment or settlement arising from products sold at the store, regardless of who manufactured them." },
      { q: "What is products-completed operations coverage?", a: "Products-completed operations coverage extends product liability protection to claims that arise after the product has left your possession. In cannabis, most product liability claims originate after the sale — a customer consumes an edible days later, a vape cartridge fails at home, contaminated flower is used weeks after purchase. Products-completed operations ensures you are covered for these post-transaction claims." },
      { q: "How much does cannabis product liability insurance cost?", a: "Cannabis product liability pricing varies by business type and product category. Dispensary product liability as part of a GL package typically runs $2,000–$5,000/year. Processor product liability for edible manufacturers can run $5,000–$20,000/year depending on revenue and product types. Vape cartridge manufacturers face the highest rates due to elevated claim history. All pricing is affected by revenue, distribution territory, and claims history." },
      { q: "Does product liability cover a recall?", a: "Basic product liability covers claims from consumers harmed by your product. Product recall coverage — which must be specifically added as an endorsement — covers the cost of executing a recall: notification, retrieval, testing, disposal, and business income loss. These are separate coverages. A complete cannabis product liability program should include both the base coverage and the recall endorsement." },
    ],
  },
  {
    slug: "cannabis-crime-theft-insurance",
    title: "Crime & Theft Insurance",
    short: "Commercial crime coverage for cash-heavy cannabis operations — employee dishonesty, robbery, burglary, safe coverage, and computer fraud.",
    icon: "Lock",
    description:
      "Cannabis businesses operate predominantly in cash due to federal banking restrictions. Commercial crime insurance covers employee dishonesty, robbery, burglary, and safe coverage that standard GL and property policies explicitly exclude. Essential for any dispensary or cash-handling operation.",
    longDescription: `## Cannabis Crime & Theft Insurance: Protecting Cash-Heavy Operations

Most cannabis dispensaries process more cash per square foot than a bank branch. Federal banking restrictions mean most cannabis operators cannot access standard merchant credit card processing, cannot maintain standard business checking accounts, and must run their operations with far more on-premises cash than any comparable retail business would tolerate.

This cash is a target. And standard commercial property and GL policies do not cover theft, robbery, or employee dishonesty.

## The Cannabis Banking Problem Creates the Crime Exposure

The Bank Secrecy Act and federal cannabis Schedule I status make most banks unwilling to provide standard business services to cannabis operators. Some credit unions have entered the cannabis banking space, and the SAFE Banking Act has been periodically proposed in Congress — but the reality for most dispensaries today is a predominantly cash operation.

What this means in practice:
- Daily cash receipts commonly run $20,000–$100,000+ for established dispensaries
- On-premises safe capacity needs to accommodate multi-day accumulations
- Cash transport to a bank or armored service is a regular operational necessity
- Employees who handle significant cash daily become potential crime exposure

## What Commercial Crime Insurance Covers

**Employee dishonesty:** Internal theft of cash, cannabis inventory, or product by employees. This is the most frequent crime claim for dispensaries — employees with regular access to cash registers, vaults, and inventory have opportunity that external criminals do not. Employee dishonesty covers loss from theft by employees including managers and officers (unless specifically excluded).

**Robbery:** Armed or forcible theft from the business during business hours or during cash transport. Dispensary robberies occur. A crime policy responds to the loss of cash and product taken during a robbery event.

**Burglary:** Theft from the premises after hours involving forcible entry. Cannabis is valuable and portable; secured dispensaries are regular burglary targets.

**Safe burglary:** Theft from a locked safe through either safe-cracking (manipulation of the lock) or removal of the safe from the premises. Many crime policies have specific safe requirements — minimum weight, UL rating — that affect coverage.

**Computer fraud:** Fraudulent transfer of funds initiated by an unauthorized third party through the business's computer systems. Business email compromise (BEC) scams target cannabis businesses as they do all businesses — a fraudulent wire transfer instruction following an email account compromise is a computer fraud claim.

**Forgery:** Acceptance of forged checks, money orders, or counterfeit currency.

## What Standard Insurance Does NOT Cover

This is the critical point: standard commercial property insurance covers damage to your building and equipment from perils like fire, wind, and water. It does NOT cover:
- Theft of cash by employees
- Robbery of cash from the premises
- Theft of cannabis inventory by employees or burglars

Standard general liability covers bodily injury and property damage claims made by third parties against you. It does NOT cover:
- Your business's own property lost to theft
- Crime-related losses to your business

Commercial crime is a separate, specific policy for these perils. Without it, the most common theft scenarios facing a cannabis dispensary are entirely uninsured.

## Security Requirements

Cannabis crime carriers require minimum security measures as a condition of coverage:
- **Alarm system:** Central station monitored alarm with perimeter and motion detection
- **Safe specifications:** UL-rated safe of minimum specified weight, often 500-1,000 lbs
- **Video surveillance:** Coverage of all cash handling areas, entrances, exits, and vault
- **Access control:** Electronic or key access control for vault and restricted areas
- **Dual controls:** For larger operations, dual-person access to vault areas

Meeting or exceeding these requirements accomplishes two things: it qualifies you for crime coverage, and it materially reduces your actual crime exposure. Documented security also supports faster claims processing when a loss does occur.

## Limits and Deductibles

Crime coverage limits should reflect:
- Maximum cash on hand at peak times (holidays, weekends before bank drops)
- Value of cannabis inventory that could be taken in an employee dishonesty event
- Safe capacity and average contents

Common dispensary crime limits: $50,000–$500,000 per occurrence depending on operation size. Deductibles typically run $2,500–$10,000. The deductible and limit structure should be reviewed annually as your operation grows.`,
    coverages: [
      "Employee Dishonesty (internal theft)",
      "Robbery (on-premises)",
      "Burglary (after-hours)",
      "Safe Burglary",
      "Computer Fraud and Wire Transfer Fraud",
      "Forgery and Counterfeit Currency",
      "Cash in Transit",
      "Cannabis Inventory Theft",
    ],
    faqs: [
      { q: "Why do cannabis dispensaries have so much cash on hand?", a: "Federal banking restrictions under the Bank Secrecy Act make most banks unwilling to serve cannabis businesses. Without access to standard merchant processing or business checking accounts, dispensaries collect cash for nearly every transaction. Established dispensaries may process $20,000–$100,000+ in daily cash sales. This cash must be secured on-premises until a bank drop or armored service pickup can occur, creating significant on-premises cash exposure." },
      { q: "Is employee theft of cannabis inventory covered?", a: "Employee theft of cash or cannabis inventory is covered under commercial crime insurance under the employee dishonesty coverage. This is NOT covered by standard commercial property or GL policies. Given that cannabis inventory is highly portable and valuable, employee theft of product is a significant exposure for dispensaries that is entirely uninsured without a crime policy." },
      { q: "Does a crime policy cover robbery of a delivery driver?", a: "Coverage for robbery of a cash-carrying delivery driver depends on how the policy is structured. Messenger robbery (robbery during intentional cash transport) is a specific crime peril that should be included for dispensaries that transport cash to a bank or use internal drivers for cash transport. Confirm with your carrier that cash in transit and messenger robbery coverage is included." },
      { q: "What safe rating do cannabis crime policies require?", a: "Most cannabis crime insurers require a minimum UL-rated safe with a specified weight threshold, commonly 500–1,000 pounds. Lighter safes can be removed from the premises entirely; weight is the primary deterrent for safe removal. Time-lock or dual-combination requirements may also apply for higher coverage limits. Your carrier will specify the minimum safe requirements in the policy conditions." },
    ],
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years Specialty Insurance" },
  { value: 50, suffix: " States", label: "Licensed Nationwide" },
  { value: 500, suffix: "+", label: "Cannabis Operations Insured" },
  { value: 24, suffix: " Hours", label: "Quote Turnaround" },
];

export const TESTIMONIALS: readonly { quote: string; name: string; role: string; location: string }[] = [];

export const FAQS = [
  { q: "Can't I just use my regular business insurance for my cannabis operation?", a: "No. Standard business insurance carriers — The Hartford, Nationwide, State Farm, Travelers — will not write cannabis operations due to federal Schedule I classification. Even if a standard carrier policy was somehow issued, a cannabis business claim would likely be denied when the carrier learns the nature of operations. Cannabis businesses require specialty surplus and non-admitted market insurance from carriers specifically underwriting cannabis risk." },
  { q: "What is non-admitted insurance and is it safe to use?", a: "Non-admitted (surplus lines) insurance operates outside the state admitted market. The difference: admitted carriers participate in state guarantee funds (which back claims if the carrier becomes insolvent); non-admitted carriers do not. However, surplus lines carriers are regulated, financially rated, and pay claims — they simply serve risks that admitted markets decline. For cannabis businesses, surplus lines is not a second-tier option; it is the primary market. Major surplus carriers like Amwins, Admiral, and Berkley are financially strong and pay claims." },
  { q: "How much does cannabis business insurance cost?", a: "Cannabis insurance cost varies significantly by business type. Dispensary GL typically runs $3,500–$7,000/year; a full dispensary coverage stack (GL + product liability + crime + property + WC) commonly runs $12,000–$25,000/year. Cultivator programs vary by facility size. Processor programs are typically higher due to elevated product liability. Hemp operations generally run lower. Call us for a quote specific to your operation type and state." },
  { q: "Do I need insurance to get my cannabis license?", a: "In most cannabis licensing states, yes — general liability insurance (and often workers compensation) is required before a license is issued or renewed. Licensing bodies require proof of insurance in the form of a certificate of insurance (ACORD 25). Minimum GL limits vary by state but $1M/$2M is the most common requirement. We provide compliant certificates fast." },
  { q: "Does cannabis insurance cover losses from a federal raid?", a: "No. Losses arising from federal law enforcement action, government seizure, or criminal proceedings are excluded from cannabis insurance policies. Insurance covers private-law risks (accidents, theft, property damage, product liability) — not regulatory enforcement or criminal proceedings. Proper state licensing compliance is your protection against regulatory action." },
  { q: "What is product liability and why is it critical for cannabis?", a: "Product liability covers third-party bodily injury and property damage claims arising from products your business made, distributed, or sold. In cannabis, every business in the supply chain — from cultivator to dispensary — can be named in a product liability lawsuit arising from a cannabis product. Without product liability coverage, a single edible adverse reaction claim can generate six-figure defense costs before any settlement." },
  { q: "Can hemp CBD businesses get standard business insurance?", a: "Hemp (≤0.3% THC under the 2018 Farm Bill) has more standard market access than THC cannabis — some admitted carriers will write hemp property and GL. However, CBD product liability — especially for edibles, tinctures, and pet products — typically requires specialty surplus markets. A complete hemp business program often combines admitted market products for some coverages with specialty markets for CBD product liability." },
  { q: "How quickly can I get covered?", a: "In most cases, we can bind cannabis business insurance and issue certificates of insurance within 24–48 hours of receiving a complete application. Larger or more complex operations may require 3–5 business days for full underwriting. For urgent licensing deadlines, tell us when you need the certificate and we will prioritize the submission accordingly." },
];

export const CREDENTIALS = [
  "Cannabis Industry Specialty Markets",
  "Surplus Lines Licensed in All 50 States",
  "Product Liability for All Cannabis Segments",
  "State License Compliance Certificates",
  "Cannabis Crop Insurance Available",
  "Same-Day Certificate Issuance",
];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
