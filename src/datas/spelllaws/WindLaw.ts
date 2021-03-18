import SpellLaw from "../../interfaces/SpellLaw"

const WindLaw: SpellLaw = {
    UUID: "353231bb-40cc-4284-bc5d-a6d6fb64be53",
    name: "Voie du vent",
    fontAwesomeIcon: "wind",
    backgroundColor: [80, 78, 97],
    textColorClass: "light",
    spells: [
        {
            UUID: "fa13d938-68af-4635-8232-12a8f127e585",
            level: 1,
            name: "Brise c",
            duration: "C",
            radius: "3m R/niv ([level*3]m R)",
            description: "Provoque une brise légère tant que le lanceur se concentre"
        },
        {
            UUID: "65a8d59f-df09-43cd-9de9-f3372ea32050",
            level: 2,
            name: "Mur d'air c",
            duration: "C",
            radius: "30m",
            description: "Crée un mur d'air brasée dense de 3m x 3m x30cm, réduit toutes les attaques et les déplacements qui de traversent de 50% (-50 aux BO)"
        },
        {
            UUID: "68436a9d-6a0c-4a7a-a618-f725282e3c3f",
            level: 4,
            name: "Nuée étourdissante (1.5m R)",
            duration: "6rd",
            radius: "Rayon doublé",
            description: "Créer un nuage de 1.5m R de particules de gaz chargées, délivre un critique d'électricité C lors des 1er et 2eme rd, un B lors des rounds 3 et 4 et un A lors du 5 et du 6. Il dérive avec le vent et affecte tout ce qui est dans son rayon. le nuage mettant un round pour se former, toute personne se trouvant dans la protée lorsqu'il se forme peut manoeuvrer pour en sortir sans subir de critique; mais après cela, toute personne se trouvant dans la zone à tout moment du round subit les critiques indiquées (un par round maximum)"
        },
        {
            UUID: "4463a931-b61a-48d3-81cb-d5a086f2bcad",
            level: 5,
            name: "Brise vent (3m R) c",
            duration: "C",
            radius: "30m",
            description: "Arrête tout mouvement d'air généralisé (ex. le vent) allant jusqu'aux vente de 48 km/h; réduit les vents supérieurs de 48 km/h sur 3m R"
        },
        {
            UUID: "d85aca4b-0832-4891-9afc-9aafa8e4d669",
            level: 6,
            name: "Nuée étourdissante (3m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(68436a9d-6a0c-4a7a-a618-f725282e3c3f)], le rayon étant de 3m"
        },
        {
            UUID: "e4442d8e-0dd2-4201-a41d-dc7f0d9eef76",
            level: 7,
            name: "Vide (1.5m R)",
            duration: "_",
            radius: "30m",
            description: "Crée un vide presque absolu de 1.5m R; tout ce qui est dans le rayon subit un critique d'impact B, lorsque l'air est expulsé et qu'il revient brutalement"
        },
        {
            UUID: "4ee048b4-bfdb-4257-b855-493a8240ad00",
            level: 8,
            name: "Brise vent (6m R) c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(4463a931-b61a-48d3-81cb-d5a086f2bcad)], le rayon étant de 6m"
        },
        {
            UUID: "4809bdcf-4051-4a92-9f4b-1b6172488a92",
            level: 10,
            name: "Nuée étourdissante (6m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(68436a9d-6a0c-4a7a-a618-f725282e3c3f)], le rayon étant de 6m"
        },
    ]
}
export default WindLaw