db.cases.insertMany([
    {
        "case": "00D3FEF53970819CCC4D01C836555362",
        "caseDescription": "  Patient presents with Flank Pain. The patient is a 51-year-old female, no significant past medical history, presents to the emergency department with left-sided flank pain ongoing ×1 month now with abdominal pain. The pain is intermittent, but has been worsening. She reports new onset nausea, vomiting, diarrhea for the last 2 days. She reports multiple episodes of nonbloody emesis starting yesterday. She has also had multiple episodes of nonbloody diarrhea. She has gone to see her primary care doctor twice since symptoms began. She was found to have mildly elevated creatinine and was referred to a nephrologist. However, the nephrologist is not willing to see her until . The patient feels she cannot wait that long especially in light of these new symptoms. She then followed up with her primary care doctor again and he prescribed Zofran and loperamide but offered her no other solutions. The pain has since increased as well. She denies any fevers, chills. She denies urinary symptoms including burning with urination, frequency, hematuria."
    },
    {
        "case": "00F5FC934E3FCE1778B175D98B8E691C",
        "caseDescription": "Patient  is an 42 year old  male.    Chief Complaint: Establish Care and Physical    HPI      Hemorrhoids  Bothersome  Comes and goes  Especially with sedentary life style  Recently worse  Couple nights where almost wakes patient up  Gets intermittently constipated  High fiber diet    Patient Active Problem    Diagnoses Code<br> -  Hemorrhoids 455.6E       No outpatient prescriptions have been marked as taking for the  encounter (Office Visit) with ,  C.     Allergies   Allergen Reactions<br> -  Pcn (Penicillins)<br> -  Morphine        No past medical history on file.  Past Surgical History   Procedure Date<br> -  Hx knee surgery      Arthroscopy age 15 for torn meniscus       Family History   Problem Relation  of Onset<br> -  Cancer Mother      Breast<br> -  Hypertension Mother<br> -  Hypertension Father      History   Substance Use Topics<br> -  Smoking status: Never Smoker<br> -  Smokeless tobacco: Not on file<br>"
    },
    {
        "case": "00688F1A12C5787124CE2F75FD58F66F",
        "caseDescription": "Patient  is an 45 year old  female.    Chief Complaint:  Problem    HPI  states that about one month ago she woke up with redness and swelling to her left eye.  She went to see an ophthalmologist who prescribed her naphazoline.  She states that this relieves the redness only temporarily.  She also states that this morning she awoke with more crusting to the left eye.  The eye is not particularly itchy, but seems more irritated today.  She has not had any sick contacts.          Review of Systems   Constitutional: Negative for fever.   Eyes: Positive for discharge and redness. Negative for blurred vision, double vision and photophobia.   Skin: Negative for itching.   Neurological: Positive for headaches.         Objective:     BP 100/69  -Strict ER precautions reviewed with patient should symptoms persist or worsen (specific signs reviewed verbally).  Good communication established and plan agreed upon by patient."
    }
]);

db.conditions.insertMany([
    {
        "icd": "A09",
        "icdDescription": "Infectious gastroenteritis and colitis, unspecified"
    },
    {
        "icd": "A64",
        "icdDescription": "Unspecified sexually transmitted disease"
    },
    {
        "icd": "B300",
        "icdDescription": "Keratoconjunctivitis due to adenovirus"
    },
    {
        "icd": "B302",
        "icdDescription": "Viral pharyngoconjunctivitis"
    },
    {
        "icd": "B308",
        "icdDescription": "Other viral conjunctivitis"
    },
    {
        "icd": "B309",
        "icdDescription": "Viral conjunctivitis, unspecified"
    },
    {
        "icd": "B373",
        "icdDescription": "Candidiasis of vulva and vagina"
    },
    {
        "icd": "B9789",
        "icdDescription": "Other viral agents as the cause of diseases classified elsewhere"
    },
    {
        "icd": "E860",
        "icdDescription": "Dehydration"
    },
    {
        "icd": "F340",
        "icdDescription": "Cyclothymic disorder"
    },
    {
        "icd": "F341",
        "icdDescription": "Dysthymic disorder"
    },
    {
        "icd": "F39",
        "icdDescription": "Unspecified mood [affective] disorder"
    },
    {
        "icd": "F411",
        "icdDescription": "Generalized anxiety disorder"
    },
    {
        "icd": "F418",
        "icdDescription": "Other specified anxiety disorders"
    },
    {
        "icd": "F419",
        "icdDescription": "Anxiety disorder, unspecified"
    },
    {
        "icd": "F4321",
        "icdDescription": "Adjustment disorder with depressed mood"
    },
    {
        "icd": "G43001",
        "icdDescription": "Migraine without aura, not intractable, with status migrainosus"
    },
    {
        "icd": "G43009",
        "icdDescription": "Migraine without aura, not intractable, without status migrainosus"
    },
    {
        "icd": "G43019",
        "icdDescription": "Migraine without aura, intractable, without status migrainosus"
    },
    {
        "icd": "G43501",
        "icdDescription": "Persistent migraine aura without cerebral infarction, not intractable, with status migrainosus"
    },
    {
        "icd": "G43509",
        "icdDescription": "Persistent migraine aura without cerebral infarction, not intractable, without status migrainosus"
    },
    {
        "icd": "G43519",
        "icdDescription": "Persistent migraine aura without cerebral infarction, intractable, without status migrainosus"
    },
    {
        "icd": "G43701",
        "icdDescription": "Chronic migraine without aura, not intractable, with status migrainosus"
    },
    {
        "icd": "G43709",
        "icdDescription": "Chronic migraine without aura, not intractable, without status migrainosus"
    },
    {
        "icd": "G43711",
        "icdDescription": "Chronic migraine without aura, intractable, with status migrainosus"
    },
    {
        "icd": "G43719",
        "icdDescription": "Chronic migraine without aura, intractable, without status migrainosus"
    },
    {
        "icd": "G43809",
        "icdDescription": "Other migraine, not intractable, without status migrainosus"
    },
    {
        "icd": "G43811",
        "icdDescription": "Other migraine, intractable, with status migrainosus"
    },
    {
        "icd": "G43819",
        "icdDescription": "Other migraine, intractable, without status migrainosus"
    },
    {
        "icd": "G43829",
        "icdDescription": "Menstrual migraine, not intractable, without status migrainosus"
    },
    {
        "icd": "G43909",
        "icdDescription": "Migraine, unspecified, not intractable, without status migrainosus"
    },
    {
        "icd": "G43911",
        "icdDescription": "Migraine, unspecified, intractable, with status migrainosus"
    },
    {
        "icd": "G43919",
        "icdDescription": "Migraine, unspecified, intractable, without status migrainosus"
    },
    {
        "icd": "G44209",
        "icdDescription": "Tension-type headache, unspecified, not intractable"
    },
    {
        "icd": "G44219",
        "icdDescription": "Episodic tension-type headache, not intractable"
    },
    {
        "icd": "G4700",
        "icdDescription": "Insomnia, unspecified"
    },
    {
        "icd": "G4701",
        "icdDescription": "Insomnia due to medical condition"
    },
    {
        "icd": "G5600",
        "icdDescription": "Carpal tunnel syndrome, unspecified upper limb"
    },
    {
        "icd": "H10029",
        "icdDescription": "Other mucopurulent conjunctivitis, unspecified eye"
    },
    {
        "icd": "H1033",
        "icdDescription": "Unspecified acute conjunctivitis, bilateral"
    },
    {
        "icd": "H1044",
        "icdDescription": "Vernal conjunctivitis"
    },
    {
        "icd": "H1045",
        "icdDescription": "Other chronic allergic conjunctivitis"
    },
    {
        "icd": "H10509",
        "icdDescription": "Unspecified blepharoconjunctivitis, unspecified eye"
    },
    {
        "icd": "H10819",
        "icdDescription": "Pingueculitis, unspecified eye"
    },
    {
        "icd": "H1089",
        "icdDescription": "Other conjunctivitis"
    },
    {
        "icd": "H109",
        "icdDescription": "Unspecified conjunctivitis"
    },
    {
        "icd": "H6020",
        "icdDescription": "Malignant otitis externa, unspecified ear"
    },
    {
        "icd": "H60339",
        "icdDescription": "Swimmer's ear, unspecified ear"
    },
    {
        "icd": "H60399",
        "icdDescription": "Other infective otitis externa, unspecified ear"
    },
    {
        "icd": "H6500",
        "icdDescription": "Acute serous otitis media, unspecified ear"
    },
    {
        "icd": "H65119",
        "icdDescription": "Acute and subacute allergic otitis media (mucoid) (sanguinous) (serous), unspecified ear"
    },
    {
        "icd": "H65199",
        "icdDescription": "Other acute nonsuppurative otitis media, unspecified ear"
    },
    {
        "icd": "H6520",
        "icdDescription": "Chronic serous otitis media, unspecified ear"
    },
    {
        "icd": "H65499",
        "icdDescription": "Other chronic nonsuppurative otitis media, unspecified ear"
    },
    {
        "icd": "H6590",
        "icdDescription": "Unspecified nonsuppurative otitis media, unspecified ear"
    },
    {
        "icd": "H66009",
        "icdDescription": "Acute suppurative otitis media without spontaneous rupture of ear drum, unspecified ear"
    },
    {
        "icd": "H66019",
        "icdDescription": "Acute suppurative otitis media with spontaneous rupture of ear drum, unspecified ear"
    },
    {
        "icd": "H663X9",
        "icdDescription": "Other chronic suppurative otitis media, unspecified ear"
    },
    {
        "icd": "H6640",
        "icdDescription": "Suppurative otitis media, unspecified, unspecified ear"
    },
    {
        "icd": "H6690",
        "icdDescription": "Otitis media, unspecified, unspecified ear"
    },
    {
        "icd": "J00",
        "icdDescription": "Acute nasopharyngitis [common cold]"
    },
    {
        "icd": "J0100",
        "icdDescription": "Acute maxillary sinusitis, unspecified"
    },
    {
        "icd": "J0110",
        "icdDescription": "Acute frontal sinusitis, unspecified"
    },
    {
        "icd": "J0130",
        "icdDescription": "Acute sphenoidal sinusitis, unspecified"
    },
    {
        "icd": "J0140",
        "icdDescription": "Acute pansinusitis, unspecified"
    },
    {
        "icd": "J0190",
        "icdDescription": "Acute sinusitis, unspecified"
    },
    {
        "icd": "J029",
        "icdDescription": "Acute pharyngitis, unspecified"
    },
    {
        "icd": "J060",
        "icdDescription": "Acute laryngopharyngitis"
    },
    {
        "icd": "J069",
        "icdDescription": "Acute upper respiratory infection, unspecified"
    },
    {
        "icd": "J209",
        "icdDescription": "Acute bronchitis, unspecified"
    },
    {
        "icd": "J301",
        "icdDescription": "Allergic rhinitis due to pollen"
    },
    {
        "icd": "J3081",
        "icdDescription": "Allergic rhinitis due to animal (cat) (dog) hair and dander"
    },
    {
        "icd": "J36",
        "icdDescription": "Peritonsillar abscess"
    },
    {
        "icd": "J40",
        "icdDescription": "Bronchitis, not specified as acute or chronic"
    },
    {
        "icd": "J411",
        "icdDescription": "Mucopurulent chronic bronchitis"
    },
    {
        "icd": "J42",
        "icdDescription": "Unspecified chronic bronchitis"
    },
    {
        "icd": "J45901",
        "icdDescription": "Unspecified asthma with (acute) exacerbation"
    },
    {
        "icd": "J45902",
        "icdDescription": "Unspecified asthma with status asthmaticus"
    },
    {
        "icd": "K210",
        "icdDescription": "Gastro-esophageal reflux disease with esophagitis"
    },
    {
        "icd": "K219",
        "icdDescription": "Gastro-esophageal reflux disease without esophagitis"
    },
    {
        "icd": "K2900",
        "icdDescription": "Acute gastritis without bleeding"
    },
    {
        "icd": "K2920",
        "icdDescription": "Alcoholic gastritis without bleeding"
    },
    {
        "icd": "K2960",
        "icdDescription": "Other gastritis without bleeding"
    },
    {
        "icd": "K5900",
        "icdDescription": "Constipation, unspecified"
    },
    {
        "icd": "K5901",
        "icdDescription": "Slow transit constipation"
    },
    {
        "icd": "K5902",
        "icdDescription": "Outlet dysfunction constipation"
    },
    {
        "icd": "K649",
        "icdDescription": "Unspecified hemorrhoids"
    },
    {
        "icd": "K8019",
        "icdDescription": "Calculus of gallbladder with other cholecystitis with obstruction"
    },
    {
        "icd": "K8020",
        "icdDescription": "Calculus of gallbladder without cholecystitis without obstruction"
    },
    {
        "icd": "K8021",
        "icdDescription": "Calculus of gallbladder without cholecystitis with obstruction"
    },
    {
        "icd": "K8042",
        "icdDescription": "Calculus of bile duct with acute cholecystitis without obstruction"
    },
    {
        "icd": "K8050",
        "icdDescription": "Calculus of bile duct without cholangitis or cholecystitis without obstruction"
    },
    {
        "icd": "K8051",
        "icdDescription": "Calculus of bile duct without cholangitis or cholecystitis with obstruction"
    },
    {
        "icd": "L240",
        "icdDescription": "Irritant contact dermatitis due to detergents"
    },
    {
        "icd": "L242",
        "icdDescription": "Irritant contact dermatitis due to solvents"
    },
    {
        "icd": "L250",
        "icdDescription": "Unspecified contact dermatitis due to cosmetics"
    },
    {
        "icd": "L251",
        "icdDescription": "Unspecified contact dermatitis due to drugs in contact with skin"
    },
    {
        "icd": "L253",
        "icdDescription": "Unspecified contact dermatitis due to other chemical products"
    },
    {
        "icd": "L255",
        "icdDescription": "Unspecified contact dermatitis due to plants, except food"
    },
    {
        "icd": "L259",
        "icdDescription": "Unspecified contact dermatitis, unspecified cause"
    },
    {
        "icd": "M25539",
        "icdDescription": "Pain in unspecified wrist"
    },
    {
        "icd": "M5430",
        "icdDescription": "Sciatica, unspecified side"
    },
    {
        "icd": "N730",
        "icdDescription": "Acute parametritis and pelvic cellulitis"
    },
    {
        "icd": "N733",
        "icdDescription": "Female acute pelvic peritonitis"
    },
    {
        "icd": "N739",
        "icdDescription": "Female pelvic inflammatory disease, unspecified"
    },
    {
        "icd": "N912",
        "icdDescription": "Amenorrhea, unspecified"
    },
    {
        "icd": "N920",
        "icdDescription": "Excessive and frequent menstruation with regular cycle"
    },
    {
        "icd": "N921",
        "icdDescription": "Excessive and frequent menstruation with irregular cycle"
    },
    {
        "icd": "N924",
        "icdDescription": "Excessive bleeding in the premenopausal period"
    },
    {
        "icd": "N930",
        "icdDescription": "Postcoital and contact bleeding"
    },
    {
        "icd": "N946",
        "icdDescription": "Dysmenorrhea, unspecified"
    },
    {
        "icd": "R079",
        "icdDescription": "Chest pain, unspecified"
    },
    {
        "icd": "R109",
        "icdDescription": "Unspecified abdominal pain"
    },
    {
        "icd": "R21",
        "icdDescription": "Rash and other nonspecific skin eruption"
    },
    {
        "icd": "R42",
        "icdDescription": "Dizziness and giddiness"
    },
    {
        "icd": "S53449A",
        "icdDescription": "Ulnar collateral ligament sprain of unspecified elbow, initial encounter"
    },
    {
        "icd": "S63519A",
        "icdDescription": "Sprain of carpal joint of unspecified wrist, initial encounter"
    },
    {
        "icd": "S63599A",
        "icdDescription": "Other specified sprain of unspecified wrist, initial encounter"
    },
    {
        "icd": "S638X9A",
        "icdDescription": "Sprain of other part of unspecified wrist and hand, initial encounter"
    },
    {
        "icd": "S93419A",
        "icdDescription": "Sprain of calcaneofibular ligament of unspecified ankle, initial encounter"
    },
    {
        "icd": "S93429A",
        "icdDescription": "Sprain of deltoid ligament of unspecified ankle, initial encounter"
    },
    {
        "icd": "S93439A",
        "icdDescription": "Sprain of tibiofibular ligament of unspecified ankle, initial encounter"
    }
]);