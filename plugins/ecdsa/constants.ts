import type { KERNEL_VERSION_TYPE } from "@zerodev/sdk/types"
import type { Address } from "viem"

export const kernelVersionToEcdsaValidatorMap: {
    [key in KERNEL_VERSION_TYPE]: Address
} = {
    "0.0.2": "0xd9AB5096a832b9ce79914329DAEE236f8Eea0390",
    "0.2.2": "0xd9AB5096a832b9ce79914329DAEE236f8Eea0390",
    "0.2.3": "0xd9AB5096a832b9ce79914329DAEE236f8Eea0390",
    "0.2.4": "0xd9AB5096a832b9ce79914329DAEE236f8Eea0390",
    "0.3.0-beta": "0x8104e3Ad430EA6d354d013A6789fDFc71E671c43",
    "0.3.1": "0x845ADb2C711129d4f3966735eD98a9F09fC4cE57"
}
