import { type Address, concatHex, encodeAbiParameters, zeroAddress } from "viem"
import { PolicyFlags } from "../constants.js"
import { GAS_POLICY_CONTRACT } from "../constants.js"
import type { Policy, PolicyParams } from "../types.js"

export type GasPolicyParams = PolicyParams & {
    maxGasAllowedInWei: bigint
    enforcePaymaster?: boolean
    paymasterAddress?: Address
}

export async function toGasPolicy({
    policyAddress = GAS_POLICY_CONTRACT,
    policyFlag = PolicyFlags.FOR_ALL_VALIDATION,
    maxGasAllowedInWei,
    enforcePaymaster = false,
    paymasterAddress = zeroAddress
}: GasPolicyParams): Promise<Policy> {
    return {
        getPolicyData: () => {
            return encodeAbiParameters(
                [
                    { name: "maxGasAllowedInWei", type: "uint128" },
                    { name: "enforcePaymaster", type: "bool" },
                    { name: "paymasterAddress", type: "address" }
                ],
                [maxGasAllowedInWei, enforcePaymaster, paymasterAddress]
            )
        },
        getPolicyInfoInBytes: () => {
            return concatHex([policyFlag, policyAddress])
        }
    }
}