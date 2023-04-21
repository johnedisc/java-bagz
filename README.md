# [java-bagz](https://github.com/johnedisc/java-bagz.git)

#### by [johnedisc](https://johnedisc.github.io/portfolio/)

#### simple react project that tracks coffee bean bag inventory.

## technologies used

* react
* css
* neovim text editor

## diagram

```mermaid
flowchart TD
    A[java-bagz] --> B{BeanControl}
    A --> J[Navbar]
    A --> K[Footer]
    B --> F((BeanList))
    F --> G[Bean]
    B --> H((NewBeanForm))
    B --> L((EditBeanForm))
    B --> I((BeanDetail))
```

## setup/installation requirements

* clone down the [repository from github](https://github.com/johnedisc/java-bagz.git) inside the directory of your choosing
```bash
git clone 
```
* move into that directory
```bash
cd ./your/directory/here/
```
* install dependencies
```bash
npm install
```
* start your dev server
```bash
npm run dev
```

## known Bugs

## license

feel free to get in touch at [christopher(dot)johnedis(at)gmail(dot)com](christopher.johnedis@gmail.com)

copyright <2023> <COPYRIGHT johnedisc>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
