import * as Inputs from '@/schema/__generated__/inputs'
import { BatchPayload } from '../../objects';
import { db } from '@/db';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyIdOnlyMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.IdOnlyWhereInput, required: false }),
      data: t.arg({ type: Inputs.IdOnlyUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await db.idOnly.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyIdOnlyMutation = defineMutation((t) => ({
  updateManyIdOnly: t.field(updateManyIdOnlyMutationObject(t)),
}));
