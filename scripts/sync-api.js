import { execSync } from 'child_process'
import { existsSync, cpSync, rmSync } from 'fs'
import { resolve, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const projectRoot = resolve(__dirname, '..')
const tmpDir = join(projectRoot, '.tmp-backend')

const BACKEND_REPO =
  process.env.BACKEND_REPO_URL ||
  'git@github.com:example/gaokao-backend.git'

async function main() {
  // Step 1: shallow clone
  console.log(`[sync-api] Cloning backend repo: ${BACKEND_REPO}`)
  try {
    execSync(
      `git clone --depth 1 --branch main ${BACKEND_REPO} "${tmpDir}"`,
      { stdio: 'pipe', timeout: 60000 },
    )
  } catch (err) {
    console.error('[sync-api] Clone failed:', err.stderr?.toString() || err.message)
    console.log('')
    console.log('========================================================')
    console.log('  请手动放置 api-docs.yaml 到项目根目录后执行:')
    console.log('  npm run gen:api')
    console.log('========================================================')
    process.exit(1)
  }

  // Step 2: copy api-docs.yaml
  const src = join(tmpDir, 'api-docs.yaml')
  const dest = join(projectRoot, 'api-docs.yaml')
  if (!existsSync(src)) {
    console.error('[sync-api] api-docs.yaml not found in cloned repo')
    rmSync(tmpDir, { recursive: true, force: true })
    process.exit(1)
  }
  cpSync(src, dest, { force: true })
  console.log('[sync-api] api-docs.yaml copied to project root')

  // Step 3: clean up temp dir
  rmSync(tmpDir, { recursive: true, force: true })
  console.log('[sync-api] Temp directory cleaned')

  // Step 4: generate API code
  console.log('[sync-api] Generating API code...')
  execSync('npm run gen:api', { stdio: 'inherit', cwd: projectRoot })
  console.log('[sync-api] Done!')
}

main()
