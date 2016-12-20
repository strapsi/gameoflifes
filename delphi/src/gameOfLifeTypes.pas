unit gameOfLifeTypes;

interface

uses
  ExtCtrls;

type
  TgameOfLifeCells = array of array of TPanel;

  TgameOfLifeMap = class(TObject)

  public
    class function getEmptyGameMap(width, heigth: Integer): TgameOfLifeCells;
  end;

implementation

class function TgameOfLifeMap.getEmptyGameMap(width, heigth: Integer): TgameOfLifeCells;
var
  x: Integer;
  y: Integer;
begin
  SetLength(Result, width);
  for x  := 0 to width - 1 do
  begin
    for y := 0 to heigth - 1 do
    begin
      Result[x][y] := TPanel.Create(nil);
    end;
  end;
end;

end.

