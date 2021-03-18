import SpellLaw from "../../interfaces/SpellLaw"

const PerceptionLaw: SpellLaw = {
    UUID: "ff82d314-e71d-4c57-a24a-dcbb3bba26b5",
    name: "Perceptions essentielles",
    fontAwesomeIcon: "eye",
    backgroundColor: [189, 227, 50],
    textColorClass: "dark",
    spells: [
        {
            UUID: "40db7d59-8e80-4062-97a0-a52cde91c715",
            level: 2,
            name: "Présence *",
            duration: "1rd/niv ([level*1]rd)",
            radius: "3m",
            description: "Le lanceur est conscient de la présence du tout être pensant/sensible à mons de 3m"
        },
        {
            UUID: "1a5c028c-7171-44cf-8f8c-f911a3b6f777",
            level: 3,
            name: "Audition (3m) c",
            duration: "1rd/niv ([level*1]rd)",
            radius: "3m",
            description: "Le lanceur peut choisir un point distant d'au maximum 3m et il entendra comme s'il était à cet endroit (il peut y avoir des obstacles tels que des murs)."
        },
        {
            UUID: "0d946021-5589-4271-ad64-6b0aed2c5885",
            level: 5,
            name: "Télé-Audition (30m) c",
            duration: "1rd/niv ([level*1]rd)",
            radius: "30m",
            description: "Le point d'écoute du lanceur peut être déplacé indépendamment jusqu'à 30m (déplacement à 3m/rd), s'il est physiquement capable de se rendre à cet endroit (il ne peut pas envoyer son point d'écoute à travers des murs ou des portes fermées)."
        },
        {
            UUID: "9bc3fdc2-ebdd-41b4-84f3-3c54b3d1a890",
            level: 6,
            name: "Visualisation (3m) c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(1a5c028c-7171-44cf-8f8c-f911a3b6f777)], mais le lanceur peut voir du point fixé (il peut effectuer une rotation)"
        },
        {
            UUID: "cda44f58-b242-4d99-be8e-eecd8ccd3f9e",
            level: 7,
            name: "Télé-Visualisation (30m) c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(0d946021-5589-4271-ad64-6b0aed2c5885)], mais le lanceur peut voir du point mobile (il peut effectuer une rotation)"
        },
        {
            UUID: "7f3f2a94-14f8-4567-b7d2-b6e31185e442",
            level: 8,
            name: "Audition (30m) c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(1a5c028c-7171-44cf-8f8c-f911a3b6f777)], ma portée étant de 30m"
        },
        {
            UUID: "23f3c565-2230-43da-9623-e03833f153f1",
            level: 10,
            name: "Télépathie c",
            duration: "1rd/niv ([level*1]rd)",
            radius: "3m",
            description: "Le lanceur peut lire les pensées superficielles de 1 cible; si la cible réussit son JR de plus de 25, elle réalise ce qui se passe"
        },
    ]
}
export default PerceptionLaw