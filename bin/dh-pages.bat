call pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct docs3"
@REM 上传到分支dh-pages
git push -f https://github.com/wbvi/wbvi.github.io master:dh-pages

@REM 这里dis-pages是一个分支