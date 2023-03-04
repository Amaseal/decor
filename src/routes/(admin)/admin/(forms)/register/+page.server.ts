import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import bcrypt from 'bcrypt'

import { db } from '$lib/scripts/db'

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.user) {
        throw redirect(302, '/')
      }
}

const register: Action = async ({ request }) => {
  const data = await request.formData()
  const email = data.get('email')
  const password = data.get('password')

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    !email ||
    !password
  ) {
    return fail(400, { invalid: true })
  }

  const user = await db.user.findUnique({
    where: { email },
  })

  if (user) {
    return fail(400, { user: true })
  }

  await db.user.create({
    data: {
      email,
      passwordHash: await bcrypt.hash(password, 10),
      userAuthToken: crypto.randomUUID(),
    },
  })

  throw redirect(303, '/admin/login')
}

export const actions: Actions = { register }