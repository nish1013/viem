import type { ExactPartial } from '../../../types/utils.js'
import type { ZkSyncTransactionSerializable } from '../types/transaction.js'

export function isEIP712Transaction(
  transaction: ExactPartial<ZkSyncTransactionSerializable>,
) {
  if (transaction.type === 'eip712') return true
  if (
    ('customSignature' in transaction && transaction.customSignature) ||
    ('paymaster' in transaction && transaction.paymaster) ||
    ('paymasterInput' in transaction && transaction.paymasterInput) ||
    ('gasPerPubdata' in transaction &&
      typeof transaction.gasPerPubdata === 'bigint') ||
    ('factoryDeps' in transaction && transaction.factoryDeps)
  )
    return true
  return false
}
