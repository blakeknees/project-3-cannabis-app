import GelatoMint from "./assets/tribalFlower1.png"
import AnimalFace from "./assets/carmelAnimalFace.png"
import strainsLMT from "./assets/strainsLimitedRNTZ.jpeg"
import alaskanIceQC from "./assets/alaskanIceQC.png"

import nugzHash from "./assets/nugzHash.png"
import diamonds from "./assets/premier5Mango.jpeg"
import shatter from "./assets/shatter.webp"
import vape from "./assets/vape.webp"

import beverage from "./assets/beverage.webp"
import beverage3 from "./assets/beverage3.webp"
import chocolates from "./assets/chocolates.webp"
import hotSauce from "./assets/hotSauce.webp"
import softchew from "./assets/softchew.webp"

import bong from "./assets/bong.webp"
import dabRig from "./assets/dabRig.webp"
import shatterizer from "./assets/shatterizer.webp"
import rollingPapers from "./assets/rollingPapers.jpg"

const products = {
    flower: [
        {
        id: '1',
        name: "Gelato Mint",
        class: "Indica",
        brand: "Tribal",
        price: 27,
        weight: "3.5g",
        thc: "21%",
        cbd: "1%",
        description: "Yum yum",
        image: GelatoMint
        },
        {
        id: '2',
        name: "Animal Face",
        class: "Sativa",
        brand: "Carmel",
        price: 40,
        weight: "3.5g",
        thc: "21%",
        cbd: "1%",
        description: "Yum yum",
        image: AnimalFace
        },
        {
        id: '3',
        name: "RNTZ",
        class: "Hybrid",
        brand: "Strains LTD",
        price: 35,
        weight: "3.5g",
        thc: "21%",
        cbd: "1%",
        description: "Yum yum",
        image: strainsLMT
        },
        {
        id: '4',
        name: "Alaskan Ice",
        class: "Sativa",
        brand: "QcGoldtech",
        price: 24,
        weight: "3.5g",
        thc: "21%",
        cbd: "1%",
        description: "Yum yum",
        image: alaskanIceQC
        },
    ],

    concentrates: [
        {
        id: '1',
        name: "OS Hash",
        class: "Hybrid",
        brand: "Nugz",
        price: 27.00,
        weight: "1g",
        thc: "34%",
        cbd: "1%",
        description: "Yum yum",
        image: nugzHash
        },
        {
        id: '2',
        name: "Diamonds",
        class: "Indica",
        brand: "Premium 5",
        price: 45.00,
        weight: "1g",
        thc: "71%",
        cbd: "1%",
        // description: "Premium 5 THCa Diamonds are a very potent creation that can be used in a number of ways, including: dab rigs, dab pens, crushed into joints, or sprinkled over a bong bowl. ",
        image: diamonds
        },
        {
        id: '3',
        name: "WW Shatter",
        class: "White Wedding",
        brand: "Shatterizer",
        price: 23.00,
        weight: "1g",
        thc: "69%",
        cbd: "1%",
        description: "Yum yum",
        image: shatter
        },
         {
        id: '4',
        name: "Vape",
        class: "Hybrid",
        brand: "Vortex",
        price: 30.00,
        weight: "1g",
        thc: "85%",
        cbd: "1%",
        description: "Yum yum",
        image: vape
        }   
    ],
    edibles: [
        {
        id: '1',
        name: "Beverage",
        class: "Hybrid",
        brand: "Bedfellows",
        price: 8.00,
        weight: "200ml",
        thc: "10mg",
        cbd: "1%",
        description: "Yum yum",
        image: beverage3
        },
        {
        id: '2',
        name: "Chocolate",
        class: "Hybrid",
        brand: "Wabi Sabi",
        price: 8.00,
        weight: "30g",
        thc: "10mg",
        cbd: "1%",
        description: "Yum yum",
        image: chocolates
        },
        {
        id: '3',
        name: "Soft Chew",
        class: "Hybrid",
        brand: "Wyld Gummies",
        price: 8.00,
        weight: "15g",
        thc: "5mg",
        cbd: "5mg",
        description: "Yum yum",
        image: softchew
        },
         {
        id: '4',
        name: "Hot Sauce",
        class: "Hybrid",
        brand: "Bogart's",
        price: 8.00,
        weight: "15ml",
        thc: "10mg",
        cbd: "1%",
        description: "Yum yum",
        image: hotSauce
        }
    ],
    accessories: [
        {
        id: '1',
        name: "Bong",
        class: "glass",
        brand: "RedTek",
        price: 20.00,
        weight: "100g",
        description: "Yum yum",
        image: bong
        },
        {
        id: '2',
        name: "Dab Rig",
        class: "glass",
        brand: "Mary Jane",
        price: 40.00,
        weight: "120g",
        description: "Yum yum",
        image: dabRig
        },
        {
        id: '3',
        name: "Rolling Papers",
        class: "paper",
        brand: "RAW",
        price: 4.00,
        weight: "15g",
        description: "Yum yum",
        image: rollingPapers
        },
         {
        id: '4',
        name: "Shatterizer",
        class: "pen",
        brand: "Shatterizer",
        price: 17.00,
        weight: "30g",
        description: "Yum yum",
        image: shatterizer
        }
    ]
}

export default products;
 