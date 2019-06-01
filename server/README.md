# Saizeriya_1000yen
1000円以内でサイゼリヤメニューの組合わせを出力する

* 2019.5.10時点のグランドメニュー記載のみ
* 持ち帰り商品なし
* 深夜料金の加算なし

https://qiita.com/marushosummers/items/a2d3681fac863734ec8a

## Enviroment
- Python 3.7.2

## Setup
```
pip install virtualenv
virtualenv ~/.virtualenvs/saize
source ~/.virtualenvs/saize/bin/activate
pip install -r requirements.txt
```

## Start Server
```
python manage.py
```

## If you got problem
### Can't find '_sqlite3' module when import it using python which installed by pyenv
see: https://stackoverflow.com/questions/53128111/cant-find-sqlite3-module-when-import-it-using-python-which-installed-by-pyenv
