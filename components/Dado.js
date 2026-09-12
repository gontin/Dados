import Image from "next/image"
export default function Dado({valor}) {
    const faces = {
        1: "/dice-six-faces-one.svg",
        2: "/dice-six-faces-two.svg",
        3: "/dice-six-faces-three.svg",
        4: "/dice-six-faces-four.svg",
        5: "/dice-six-faces-five.svg",
        6: "/dice-six-faces-six.svg"
    }


    return (
        <Image
            src={faces[valor]}
            width={300}
            height={300}
            alt="Dice"
        />
    )
}