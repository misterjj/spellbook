import SpellLaw from "../../interfaces/SpellLaw"

const WaterLaw: SpellLaw = {
    UUID: "126c7b83-75fa-4a29-b0ea-8d9f456d39be",
    name: "Voie du l'eau",
    fontAwesomeIcon: "tint",
    backgroundColor: [86, 104, 240],
    textColorClass: "light",
    spells: [
        {
            UUID: "9e3f5f1d-8bf5-429a-ac2a-95718ae67be6",
            level: 1,
            name: "Condensation",
            duration: "P",
            radius: "T",
            description: "Condense 27dm3 d'eau de l'air environnant"
        },
        {
            UUID: "f2c09160-3863-457c-9ceb-26c06d68a0d5",
            level: 2,
            name: "Brume",
            duration: "P",
            radius: "30m",
            description: "Crée un brume dense dans 3m R/niv ([level*3]m R) maximum"
        },
        {
            UUID: "250fb58f-66c2-4f41-a8c3-190b2f42a2a6",
            level: 3,
            name: "Mur d'eau c",
            duration: "C",
            radius: "30m",
            description: "Crée un mur d'eau de 3m x 3m x30cm, réduit toutes les attaques et les déplacements qui de traversent de 80% (-80 aux BO)"
        },
        {
            UUID: "5103758d-bbd0-498c-9213-ae411ca1a516",
            level: 4,
            name: "Eclair d'eau (30m)",
            duration: "_",
            radius: "30m",
            description: "Un éclair d'eau jaillit de la paume du lanceur; les résultats sont déterminées dans la table des éclairs d'eau"
        },
        {
            UUID: "08615d2b-abff-4ed8-915f-a25bd18f4ea4",
            level: 5,
            name: "Anti-brume",
            duration: "P",
            radius: "30m",
            description: "Disperse la brime dans 3m R/niv ([level*3]m R)"
        },
        {
            UUID: "7f70db63-0c02-4a57-8497-96acbe089336",
            level: 8,
            name: "Accalmie de eaux c",
            duration: "C",
            radius: "30m R",
            description: "L'eau contenue dans la portée est calmé; les vagues sont réduites de 6m au centre et de moins sur le périmètre"
        },
        {
            UUID: "8673c849-8e1e-43b6-acad-a535f0756af6",
            level: 10,
            name: "Mur d'eau suprême",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(250fb58f-66c2-4f41-a8c3-190b2f42a2a6)], mais le lanceur n'a pas besoin de se concentrer et la durée est de 1mn/niv ([level*10]mn)"
        },
    ]
}
export default WaterLaw