unit gameOfLifeForm;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, gameOfLifeTypes;

type
  TgameOfLifeScene = class(TForm)
  private
    fgameOfLifeCells: TgameOfLifeCells;
    
    procedure createGameOfLifeCells(width, height: Integer);
    procedure startGameOfLife();

  end;

var
  gameOfLifeScene: TgameOfLifeScene;

implementation

{$R *.dfm}

procedure TgameOfLifeScene.createGameOfLifeCells(width, height: Integer);
begin

end;

procedure TgameOfLifeScene.startGameOfLife();
begin

end;

end.
