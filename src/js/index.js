import $ from 'jquery';
 
global.jQuery = $;
global.$ = $;

import '../scss/style.scss';

import 'bootstrap';

require.context('../blocks/', true, /\.(png|gif|svg|jpg)$/);
require.context('../img/', true, /\.(png|gif|svg|jpg)$/);

$('#btn-tooltip').tooltip();

var firstbutton = document.getElementById('first');
var secondbutton = document.getElementById('second');

firstbutton.addEventListener("click", function(){
    var animals = {
        
        text:"Животные",
        childs:[
            {   
                text: "Млекопитающие",
                childs: [
                    {text: "Коровы"},
                    {text: "Ослы"},
                    {text: "Собаки"},
                    {text: "Тигры"}
                ]
            },
            {
                text: "Другие",
                childs: [
                    {text: "Змеи"}, 
                    {text: "Птицы"}, 
                    {text: "Ящерицы"}
                ]
            }
        ]
    }
    var fish = {
        text: "Рыбы",
        childs: [
            {
                text: "Аквариумные", 
                childs: [
                    {text: "Гуппи"}, 
                    {text: "Скалярии"}
                ]
            }, 
            {
                text: "Морские",
                childs: [
                    {text: "Морская форель"}
                ]
            }
        ]
    }
    
    var tree = document.createElement("ul")
    formation(tree, animals)    
    formation(tree, fish)
    var body = document.getElementsByTagName("body")
    body[0].appendChild(tree)
    
    function formation(top, block)
    {
        var current = document.createElement("li")
        current.innerHTML = block.text
        if (block.hasOwnProperty("childs")) {
            var child = document.createElement("ul")
            for (let i of block.childs)
            {
                formation(child,i)
            }
            current.appendChild(child)
        }
        top.appendChild(current)
    }
    
    function recursion(parent_node)
    {
        console.log(parent_node);
        let s = parent_node.children
        if (s.length > 0)
        {
            for( let i = 0; i < s.length; i++)
                recursion(s[i]);
        }    
    }
    
    recursion(document.getElementById("html"))
});

secondbutton.addEventListener("click", function(){
    var animals = {
        text: "Животные",
        children: [{ text: "Млекопитающие", children: [{ text: "Коровы" }, { text: "Ослы" }, { text: "Собаки" }, { text: "Тигры" }] }, { text: "Другие", children: [{ text: "Змеи" }, { text: "Птицы" }, { text: "Ящерицы" }] }]
    }
    var fish = {
        text: "Рыбы",
        children: [{ text: "Аквариумные", children: [{ text: "Гуппи" }, { text: "Скалярии" }] }, { text: "Морские", children: [{ text: "Морская форель" }] }]
    }

    const all = [animals, fish]

    const root = $('#root')

    const generate = (structure, parent) => {
        parent.append('<ul></ul>')

        if (!structure) return

        for (let i = 0; i < structure.length; i++) {
            const contains = structure[i].children ? `[${structure[i].children.length}]` : ''
            parent.children("ul").append(`<li><span>${structure[i].text}</span> <span class="count"></span></li>`)
            generate(structure[i].children, parent.children("ul").children('li:last-child'))
        }
    }

    const count = (element) => {
        return element.find('li').length
    }

    generate(all, root)


    $('li').each(function() {
        const counter = count($(this))
        $(this).children('.count').addClass(counter > 0 ? 'red' : 'gray').html(`[${counter}]`)
    })

    $('li').click(function () {
        $(this).children().not('span').slideToggle()
        event.stopPropagation()
    })
});  