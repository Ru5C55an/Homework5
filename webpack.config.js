//Подключение модулей (базовые переменные)
const path = require('path');
const webpack = require('webpack');


//Устанавлтваем плагины
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Подключение плагина для переделывания .scss кода в .css
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Подключение плагина для создания index.html файла в dist в котор
														 //ом будут подключаться актуальыне [name][contenthash].js и .css файлы
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //Подключение плагина для очистки папки dist при каждой сборки
const CopyWebpackPlugin = require('copy-webpack-plugin'); //Подключение плагина для копирования файлов или папок в другое место
const isDev = process.env.NODE_ENV === 'development'; //Переменная которая хранит true или false в зависимости от типо запущенного вебпака (Значение она получает через код Node.js)
const isProd = !isDev //перменная для редима продакшена
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin'); 
const TerserWebpackPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer'); //Можем видеть какие объекты в проекте сколько занимают ...
const optimization = () => {      //Данная функция будет возвращать сгенерированный объект
	const config = {
		splitChunks: {
			chunks: 'all' //С помощью этого вебпак будет создавать 1 файл с кодом от jquery при импортировании его в файлы, в один отдельный файл
		}
	}
	if (isProd) {				//Если у нас режим сборки до добавляются вот эти вот два минимайзера и мы получаем полностью минимизированный проект
		config.minimizer = [
			new OptimizeCssAssetPlugin(),
			new TerserWebpackPlugin()
		]
	}
	return config
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`; //Создаем переменну которая будет хранить ext который в зависимости от режима разработки будет принимать различные варианты
const cssLoaders = extra => {				//данная фунция будет возвращать все лоадеры, которые относятся к обычному .css
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader, //позволяет выносить s*css в отдельный файл
			options: {
				hmr: isDev, //hot module replacement. Мы можем изменять определенные сущности без перезагрузки страниц
				reloadAll: true 
			}
		},
		
		'css-loader', //?url=false добавил чувак из телеги, не знаю зачем он нужен (та нет, ./ можно удалить. Отключает resolving относительных путей)
		//'postcss-loader',
	]
	
	if (extra) { //Если параметр определен, то тогда в массив loaders c помощью метода push мы будем добавться extra
		loaders.push(extra)
	}
	return loaders;
};

const babelOptions = preset => { 	//Функция для группировки общих настроек js, ts, react
	const opts = {
		presets: [
			'@babel/preset-env', //Подключение предустановочного файла с настройками 
		],
		plugins: [
			'@babel/plugin-proposal-class-properties' //Плагин для работы когда, который в предложении, но не в стандарте
		]
	}

	if (preset) {
		opts.presets.push(preset);
	}

	return opts;
};

const jsLoaders = () => {
	const loaders = [{
		loader: 'babel-loader',
		options: babelOptions(),
	}]

	if (isDev) {
		loaders.push('eslint-loader')
	}
	return loaders
};


//Функция для динамического добавления элементов в plugins
const plugins = () => {
	//Базовые плагины
	const base = [ 
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				//Прописываем имена создаваемых файлов
				filename: filename('css'),
			}),
			/*
			new HTMLWebpackPlugin({
				filename: 'index.html',
				template: './pug/pages/index.pug', //Выбираем откуда он будет брать index.html файл
				minify: {
					collapseWhitespace: isProd //Минимизация html в режиме продакшена
				}
			}),
			*/
	
			new CleanWebpackPlugin(),
	
			new CopyWebpackPlugin([
				{
					from: path.resolve(__dirname, 'src/favicon.ico'), //откуда. Это могут быть целые папки или отдельные файлы
					to: path.resolve(__dirname, 'dist'), //куда
				}
			]),

			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jquery': 'jquery',
				'window.jQuery': 'jquery', 
				'window.$': 'jquery',
			}),

			// Automatic creation any html pages (Don't forget to RERUN dev server)
    // see more: https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
    // best way to create pages: https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
    ...PAGES.map(page => new HtmlWebpackPlugin({
		template: `${PAGES_DIR}/${page}`,
		filename: `${page.replace(/\.pug/,'.html')}`,
		minify: {
			collapseWhitespace: isProd //Минимизация html в режиме продакшена
		}
	  })),
	]

	if (isProd) {
		base.push(new BundleAnalyzerPlugin())
	}

	return base
}
//Настройки для пага
// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
	src: path.join(__dirname, '/src'),
	dist: path.join(__dirname, '/dist'),
	assets: 'assets/'
  }


const fs = require('fs')
// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
// const PAGES_DIR = PATHS.src
const PAGES_DIR = `${PATHS.src}/pug/pages`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

//Настройка самого модуля
module.exports = {
	mode: 'development', //Устанавливаем режим разработки по умолчанию. Если сборка в режиме разработки, то собранные файлы не минифицируются
	//Бвзовый путь к проекту
	context: path.resolve(__dirname, 'src'), //с помощью path.resolve мы указываем не абсолютный путь
	//Точка входа в js
  	entry: {
		//Основнлй файл приложения (основная точка входа)
		main: [
			  './js/index.js',
			  './scss/style.scss',
			  '@babel/polyfill',
		],
	},
	
	//Путь для собранных файлов
  	output: {
    	path: path.resolve(__dirname, 'dist'),
		filename: filename('js'),
		//filename: 'scripts/[name].js',
		//Обновление путей (например для путей картинок)
		//publicPath: '/dist'
	},

	//
	resolve: {
		extensions: ['.js', '.json', '.png'],  //Говорим вебпаку какие расширения нужно принимать по умолчанию (например чтобы не писать к имени файла его расширение)
		alias: {
			//Можем сюда прописывать пути на переменнкю, чтобы потом этот путь юзать в виде переменной
			'@': path.resolve(__dirname, 'src'),
		}
	},

	optimization: optimization(),

	//Конфигуратор webpack-dev-server (Чтобы открывал сразу нужную страницу в браузере), также нам не потребуется самостоятельно перезагружать страницу для обновления изменений
	devServer: {
		//port: 4200, //Можно и не указывать
		hot: isDev,
		overlay: true, //Вывод ошибки не в консоли браузера, а поверх страницы сайта красным текстом
		//contentBase: './src/pug/pages/' //Путь к папке, где лежит index.html и прочие страницы
	},

	//Создание исходных карт в случае если мы в режиме разработки
	devtool: isDev ? 'source-map' : '', //surce-map нужен чтобы мы могли переходить к исходных файлам при работе с devtools в браузере

	//
	module: {
		//Пишем правила
		rules: [
			//Правило для случая, если webpack находит scss файлы
			{
				test: /\.css$/, //При совпадении имени файла на формат .scss
				//Они будут использовать специальный модуль:
				use: cssLoaders(),
			},
			//Правило для случая, если Webpack находит .less файлы
			{
			test: /\.less$/, //При совпадении имени файла на формат .less
				//Они будут использовать специальный модуль:
				use: cssLoaders('less-loader')
			},
			//Правило для случая, если Webpack находит .sass/.scss файлы
			{
				test: /\.s[ac]ss$/, //При совпадении имени файла на формат .scss/.sass
					//Они будут использовать специальный модуль:
					use: cssLoaders('sass-loader')
				},
			//Правило для случая, если webpack находит js файлы
			{
				test: /\.js$/,
				use: jsLoaders(),
				exclude: '/node_modules/', //исключаем js файлы node_modules
			},

			//Правило для случая, если webpack находит ts (TypeScript) файлы
			{
				test: /\.ts$/,
				loader: {
					loader: 'babel-loader',
					options: babelOptions('@babel/preset-typescript'), //Подключение предустановочного файла с настройками для TypeScript
				},
				exclude: '/node_modules/', //исключаем js файлы node_modules
			},
			//Правило для случая, если webpack находит jsx (React) файлы
			{
				test: /\.jsx$/,
				loader: {
					loader: 'babel-loader',
					options: babelOptions('@babel/preset-react'), //Подключение предустановочного файла с настройками для TypeScript
				},
				exclude: '/node_modules/', //исключаем js файлы node_modules
			},

			//Правило для случая, если webpack находит изображения
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'img/'
				},
				exclude: path.resolve(__dirname, 'src/fonts')
			},

			//Правило для случая, если webpack находит pug
			{
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty:true
                }
            },

			//Правило для случая, если webpack находит шрифты
			{
				test: /\.(ttf|woff|woff2|eot|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',
				},
				include: [/fonts/, /node_modules/],
				
			},

			//Правило для случая, если webpack находит .xml файлы
			{
				test: /\.xml$/,
				use: ['xml-loader']
			},

			//Правило для случая, если webpack находит .csv файлы
			{
				test: /\.csv$/,
				use: ['csv-loader'] //csv-loader требует papaparse
			}
		],
	},

	plugins: plugins(),
};