import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Table, Clock, TextField, Chip, Select, Card, SvgButton } from 'dash-design'
import FolderIcon from '@material-ui/icons/Folder';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './App.css';

export default function App() {

  const options = [
    {
      name: 'Test 1'
    },
    {
      name: 'Test 2'
    }
  ];

  return (
    <Router>
      <div className="app">
        <div className="container-fluid">
          <div className="row" style={{ minHeight: '100vh' }}>
            <div className="col-auto nospacing">
            </div>
            <div className="col nospacing">
              <div className="container-fluid card-spacing">
                <div className="row">
                  <div className="col">
                    <Card title='Neue Zeiterfassung starten'>
                      <div className="container-fluid">
                        <div className="row align-items-end">
                          <div className="col">
                            <TextField type='password' style={{ width: '100%' }} label='Titel der Tätigkeit' />
                          </div>
                          <div className="col-2">
                            <Select
                              style={{ width: '100%' }}
                              leadingIcon={<FolderIcon />}
                              label='Projekt auswählen'
                              options={options}
                              actions={(
                                <Button type='secondary' size='small' text='Neues Projekt' onMouseDown={() => console.log('Click')} />
                              )} />
                          </div>
                          <div className="col-2">
                            <Select style={{ width: '100%' }} leadingIcon={<LocalOfferIcon />} label='Tags' />
                          </div>
                          <div className="col-auto">
                            <Button type='secondary' text='Starten' />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col mr-4 pr-0">
                    <Card title='Zuletzt verwendete Anwendungen' style={{ height: '100%' }}>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col">
                            <Table
                              headers={
                                ['Platzierung', 'Anwendung', 'Dauer', 'Prozent']
                              }
                              data={[
                                ['Test', 'Test', 'Test', <SvgButton img={FolderIcon} onClick={() => console.log('click')} />]
                              ]} />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="col-auto pl-0 ml-4">
                    <Card title='Aktuelle Zeiterfassung' subtitle='Quellen für Inhalte eines Musik-Videos suchen und dokumentieren'>
                      <div className="container-fluid nospacing">
                        <div className="row justify-content-center">
                          <div className="col-auto">
                            <Clock hours={1} minutes={40} seconds={33} style={{ marginBottom: 48 }} />
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid nospacing">
                        <div className="row justify-content-center">
                          <div className="col-auto">
                            <Chip value='144,00€' label='Umsatz' highlight />
                          </div>
                          <div className="col-auto">
                            <Chip value='07:58h' label='Gesamtzeit' />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </Router>
  );

}
